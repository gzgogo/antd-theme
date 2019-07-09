import React, { Component } from 'react';
import {
  Row,
  Col,
  Icon,
  Breadcrumb,
  Menu,
  Layout,
  Card,
  message,
  Button,
  InputNumber,
  Input,
  Tooltip
} from 'antd';
import ColorPicker from 'component/ColorPicker';
import ExampleForm from './ExampleForm';
import defaultVars from '../../vars';

import './style.less';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
  constructor(props) {
    super(props);

    const vars = {};
    const cacheTheme = JSON.parse(localStorage.getItem('app-theme'));
    try {
      defaultVars.forEach((item) => {
        const copy = { ...item };
        if (cacheTheme && cacheTheme[item.name]) {
          copy.value = cacheTheme[item.name];
        }
        vars[item.name] = copy;
      });
    } finally {
      this.state = { 
        vars,
        menuTheme: 'light'
      };
      window.less
        .modifyVars(this.extractTheme(vars))
        .then(() => { })
        .catch(() => {
          message.error('Failed to update theme');
        });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  handleColorChange = (varname, color) => {
    const { vars } = this.state;
    if (varname) {
      vars[varname].value = color;
    }

    window.less
      .modifyVars(this.extractTheme(vars))
      .then(() => {
        this.setState({ vars });
      })
      .catch(() => {
        message.error('Failed to update theme');
      });
  }

  handleNumberChange = (varname, value) => {
    const { vars } = this.state;
    value = `${value}px`;
    if (varname) {
      vars[varname].value = value;
    }

    window.less
      .modifyVars(this.extractTheme(vars))
      .then(() => {
        this.setState({ vars });
      })
      .catch(() => {
        message.error('Failed to update theme');
      });
  }

  handleStringChange = (varname, value) => {
    const { vars } = this.state;
    if (varname) {
      vars[varname].value = value;
    }

    window.less
      .modifyVars(this.extractTheme(vars))
      .then(() => {
        this.setState({ vars });
      })
      .catch(() => {
        message.error('Failed to update theme');
      });
  }

  handleResetTheme = () => {
    localStorage.setItem('app-theme', '{}');

    const vars = {};
    const theme = {};
    defaultVars.forEach((item) => {
      const copy = { ...item };
      vars[item.name] = copy;
      theme[item.name] = item.value;
    });
    this.setState({ vars });
    window.less
      .modifyVars(theme)
      .catch(() => {
        message.error('Failed to reset theme');
      });
  }

  handleSaveTheme = () => {
    const { vars } = this.state;

    let content = '';
    const theme = {};
    Object.keys(vars).forEach((key) => {
      content += `${key}: ${vars[key].value};\n`;
      theme[key] = vars[key].value;
    });

    if (content) {
      localStorage.setItem('app-theme', JSON.stringify(theme));
      this.downloadFile('antd-theme.less', content);
    }
  }

  handleMenuThemeChange = (theme) => {
    this.setState({
      menuTheme: theme
    });
  }

  downloadFile = (fileName, content) => {
    const aLink = document.createElement('a');
    const blob = new Blob([content]);
    // const evt = document.createEvent('HTMLEvents');
    // evt.initEvent('click', false, false); // initEvent 不加后两个参数在FF下会报错, 感谢 Barret Lee 的反馈
    aLink.download = fileName;
    aLink.href = URL.createObjectURL(blob);
    aLink.click();
    // aLink.dispatchEvent(evt);
  }

  extractTheme = (vars) => {
    const theme = {};
    Object.keys(vars).forEach(key => (theme[key] = vars[key].value));

    return theme;
  }

  getColorField = varName => (
    <div className="field-row" key={varName}>
      <div className="field-name">
        <Tooltip title={this.state.vars[varName].desc}>
          {varName}
        </Tooltip>
      </div>
      <div className="field-value">
        <ColorPicker
          type="sketch"
          small
          color={this.state.vars[varName].value}
          position="bottom"
          presetColors={[
            '#F5222D',
            '#FA541C',
            '#FA8C16',
            '#FAAD14',
            '#FADB14',
            '#A0D911',
            '#52C41A',
            '#13C2C2',
            '#1890FF',
            '#2F54EB',
            '#722ED1',
            '#EB2F96'
          ]}
          onChangeComplete={color => this.handleColorChange(varName, color)}
        />
      </div>
    </div>
  )

  getNumberField = varName => (
    <div className="field-row" key={varName}>
      <div className="field-name">
        <Tooltip title={this.state.vars[varName].desc}>
          {varName}
        </Tooltip>
      </div>
      <div className="field-value">
        <InputNumber
          style={{ width: 60 }}
          size="small"
          min={0}
          defaultValue={this.state.vars[varName].value}
          onChange={value => this.handleNumberChange(varName, value)}
        />
      </div>
    </div>
  )

  getStringField = varName => (
    <div className="field-row" key={varName}>
      <div className="field-name">
        <Tooltip title={this.state.vars[varName].desc}>
          {varName}
        </Tooltip>
      </div>
      <div className="field-value">
        <Input
          style={{ width: 120 }}
          size="small"
          defaultValue={this.state.vars[varName].value}
          onChange={e => this.handleStringChange(varName, e.target.value)}
        />
      </div>
    </div>
  )

  getField = (item) => {
    switch (item.type) {
      case 'color':
        return this.getColorField(item.name);
      case 'number':
        return this.getNumberField(item.name);
      case 'string':
        return this.getStringField(item.name);
      default:
        break;
    }
  }

  render() {
    const fileds = [];
    defaultVars.forEach(item => (fileds.push(this.getField(item))));

    return (
      <Layout style={{ height: '100%' }}>
        <Header className="header">
          <Row type="flex">
            <Col xs={24} sm={6}>
              {/* <div className="logo">Live Theme</div> */}
              <div className="logo">
                <img src={require('../../asset/image/logo.svg')} alt="logo" />
                <h1>Ant Design</h1>
              </div>
            </Col>
            <Col xs={0} sm={18}>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Col>
            {/* <div className="header-actions">
              <a href="" id="btn-install">install</a>
            </div> */}
          </Row>
        </Header>
        <Layout>
          <Sider width={200}>
            <Menu
              mode="inline"
              theme={this.state.menuTheme}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />subnav 1
                  </span>
                }
              >
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="laptop" />subnav 2
                  </span>
                    }
              >
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="notification" />subnav 3
                  </span>
                    }
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              <Row>
                <Col xs={24} sm={6}>
                  <Card
                    title="Theme"
                    style={{ width: 320 }}
                    actions={[
                      <Button
                        type="primary"
                        onClick={this.handleResetTheme}
                      >
                            Reset Theme
                      </Button>,
                      <Button
                        type="primary"
                        onClick={this.handleSaveTheme}
                      >
                            Save Theme
                      </Button>
                    ]}
                  >
                    <div style={{ marginTop: '10px' }}>
                      {fileds}
                    </div>
                  </Card>
                </Col>
                <Col xs={24} sm={{ span: 15, offset: 2 }}>
                  <ExampleForm
                    menuTheme={this.state.menuTheme}
                    onMenuThemeChange={this.handleMenuThemeChange}
                  />
                </Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
