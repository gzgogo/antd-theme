import React, { Component } from 'react';
import Draggable from 'react-draggable';
import {
  Row,
  Col,
  Icon,
  Breadcrumb,
  Menu,
  Layout
} from 'antd';
import ExampleForm from 'component/ExampleForm';
import ThemeCard from 'component/ThemeCard';

import './style.less';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuTheme: 'light'
    };
  }

  handleMenuThemeChange = (theme) => {
    this.setState({
      menuTheme: theme
    });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100%' }}>
        <Header className="header" style={{ padding: '0 20px' }}>
          <Row type="flex">
            <Col xs={24} sm={10}>
              {/* <div className="logo">Live Theme</div> */}
              <div className="logo">
                <img src={require('../../asset/image/logo.svg')} alt="logo" />
                <h1 className="logo-title">Ant Design</h1>
              </div>
            </Col>
            <Col xs={0} sm={14}>
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
                minHeight: 280
              }}
            >
              <Row>
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
        <Draggable
          bounds="parent"
          handle=".theme-card .ant-card-head"
        >
          <div className="theme-card-wrapper">
            <ThemeCard />
          </div>
        </Draggable>
      </Layout>
    );
  }
}

export default App;
