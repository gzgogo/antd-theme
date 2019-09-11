import React, { Component } from 'react';
import {
  Card,
  message,
  Button,
  InputNumber,
  Input,
  Tooltip,
  Collapse,
  Select,
  Icon,
  Popconfirm
} from 'antd';
import ColorPicker from 'component/ColorPicker';
import defaultVars from 'src/vars';
import themes from 'theme';
import './style.less';

const { Panel } = Collapse;
const { Option } = Select;
const { Search } = Input;

const THEME_NAME_KEY = 'theme-name';
const THEME_VALUE_KEY = 'theme-value';

class ThemeCard extends Component {
  constructor(props) {
    super(props);

    const defaultTheme = props.defaultTheme || localStorage.getItem(THEME_NAME_KEY) || 'default';

    const vars = {};
    const cacheTheme = JSON.parse(localStorage.getItem(THEME_VALUE_KEY));
    const theme = defaultTheme && themes[defaultTheme] ? themes[defaultTheme] : cacheTheme;
    try {
      defaultVars.forEach((group) => {
        group.children.forEach((item) => {
          if (item.type === 'number') {
            item.value = `${item.value}${item.unit}`;
          }
          if (theme && theme[item.name]) {
            item.value = theme[item.name];
          }
          vars[item.name] = item;
        });
      });
    } finally {
      this.state = {
        vars,
        selectedTheme: defaultTheme,
        keyword: '',
        expanded: true
      };
      window.less
        .modifyVars(this.extractTheme(vars))
        .then(() => { })
        .catch(() => {
          message.error('Failed to update theme');
        });
    }
  }

  handleColorChange = (varname, color) => {
    const { vars } = this.state;
    if (varname) {
      vars[varname].value = color;
    }

    const theme = this.extractTheme(vars);
    window.less
      .modifyVars(theme)
      .then(() => {
        this.setState({ vars });
        localStorage.setItem(THEME_VALUE_KEY, JSON.stringify(theme));
      })
      .catch(() => {
        message.error('Failed to update theme');
      });
  }

  handleNumberChange = (varname, value) => {
    const { vars } = this.state;
    if (varname) {
      vars[varname].value = `${value}${vars[varname].unit}`;

      const theme = this.extractTheme(vars);
      window.less
        .modifyVars(theme)
        .then(() => {
          this.setState({ vars });
          localStorage.setItem(THEME_VALUE_KEY, JSON.stringify(theme));
        })
        .catch(() => {
          message.error('Failed to update theme');
        });
    }
  }

  handleStringChange = (varname, value) => {
    const { vars } = this.state;
    if (varname) {
      vars[varname].value = value;
    }

    const theme = this.extractTheme(vars);
    window.less
      .modifyVars(theme)
      .then(() => {
        this.setState({ vars });
        localStorage.setItem(THEME_VALUE_KEY, JSON.stringify(theme));
      })
      .catch(() => {
        message.error('Failed to update theme');
      });
  }

  handleThemeChange = (value) => {
    const { vars } = this.state;

    const theme = themes[value];
    if (theme) {
      Object.keys(theme).forEach((key) => {
        if (vars[key]) {
          vars[key].value = theme[key];
        }
      });

      console.log(theme);

      window.less
        .modifyVars(theme)
        .then(() => {
          this.setState({
            selectedTheme: value,
            vars
          });
          localStorage.setItem(THEME_NAME_KEY, value);
          localStorage.setItem(THEME_VALUE_KEY, JSON.stringify(theme));
        })
        .catch((err) => {
          console.log(err);
          message.error('Failed to update theme');
        });
    }
  }

  handleSearch = (e) => {
    this.setState({
      keyword: e.target.value
    });
  }

  handleResetTheme = () => {
    const { selectedTheme } = this.state;

    localStorage.setItem(THEME_VALUE_KEY, '{}');
    this.handleThemeChange(selectedTheme);
  }

  handleSaveLess = () => {
    const { vars } = this.state;

    let content = '';
    const theme = {};
    Object.keys(vars).forEach((key) => {
      if (vars[key].value !== themes.default[key]) {
        content += `${key}: ${vars[key].value};\n`;
        theme[key] = vars[key].value;
      }
    });

    if (content) {
      // localStorage.setItem(THEME_VALUE_KEY, JSON.stringify(theme));
      this.downloadFile('my-theme.less', content);
    } else {
      message.info('nothing changed');
    }
  }

  handleSaveJs = () => {
    const { vars } = this.state;

    let content = '';
    const theme = {};
    Object.keys(vars).forEach((key) => {
      // if (vars[key].value !== themes.default[key]) {
      //   content += `  '${key}': '${vars[key].value}',\n`;
      //   theme[key] = vars[key].value;
      // }
      const { value } = vars[key];
      content += typeof value === 'string' && value.indexOf("'") !== -1 ? `  '${key}': "${value}",\n` : `  '${key}': '${value}',\n`;
      theme[key] = vars[key].value;
    });

    if (content) {
      content = `export default {\n${content}};\n`;

      // localStorage.setItem(THEME_VALUE_KEY, JSON.stringify(theme));
      this.downloadFile('my-theme.js', content);
    } else {
      message.info('nothing changed');
    }
  }

  handleThemeCardToggle = () => {
    this.setState({
      expanded: !this.state.expanded
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
    Object.keys(vars).forEach((key) => {
      theme[key] = vars[key].value;
    });

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
          style={{ width: 80 }}
          size="small"
          min={0}
          defaultValue={parseInt(this.state.vars[varName].value, 10)}
          formatter={value => `${value}${this.state.vars[varName].unit || ''}`}
          parser={value => value.replace(this.state.vars[varName].unit || '', '')}
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
    const { keyword, expanded, selectedTheme } = this.state;

    // const hint = (
    //   <div>
    //     <p>1. 点击“Save js”保存主题</p>
    //     <p>2. 进入https://github.com/gzgogo/antd-theme，fork该项目</p>
    //     <p>3. 获取代码：git clone git@github.com:you-github-id/antd-theme.git</p>
    //     <p>4. 将第一步得到的js文件放到src/theme下，文件名即是您主题的名字</p>
    //     <p>5. 提交pull request</p>
    //     <p>6. 待我merge后，即可显示在预置主题列表中</p>
    //     <p>7. 谢谢您的参与与贡献！</p>
    //   </div>
    // );

    const title = (
      <div className="theme-card-title">
        <div>
          Theme
          <Tooltip
            title={
              <div>
                如何将您的主题添加进预置主题请参考&nbsp;
                <a href="https://github.com/gzgogo/antd-theme" target="_blank">GitHub</a>
              </div>
            }
          >
            <Icon
              type="question-circle"
              theme="twoTone"
              style={{
                marginLeft: 6
              }}
            />
          </Tooltip>
        </div>
        <Select
          value={selectedTheme}
          placeholder="选择预置主题"
          size="small"
          style={{ width: 140 }}
          onChange={this.handleThemeChange}
        >
          {
            Object.keys(themes)
              // .filter(item => item !== 'default')
              .map(item => <Option key={item} value={item}>{item}</Option>)
          }
        </Select>
      </div>
    );

    let varsBody = null;
    if (keyword) {
      const fileds = [];

      defaultVars.forEach((group) => {
        group.children.forEach((item) => {
          if (item.name.indexOf(keyword) >= 0) {
            fileds.push(this.getField(item));
          }
        });
      });

      if (fileds.length) {
        varsBody = (
          <div className="search-fileds">
            {fileds}
          </div>
        );
      }
    } else {
      const panels = defaultVars.map((group) => {
        const fileds = group.children.map(item => (this.getField(item)));
        return (
          <Panel header={group.name} key={group.name}>
            {fileds}
          </Panel>
        );
      });

      varsBody = (
        <Collapse
          style={{ marginTop: '10px' }}
          defaultActiveKey="Colors"
        >
          {panels}
        </Collapse>
      );
    }

    return (
      <div className="theme-card">
        <div
          className="toggle"
          onClick={this.handleThemeCardToggle}
        >
          <img
            className="btn-toggle"
            src={require('image/theme.png')}
            alt=""
          />
        </div>
        <Card
          className={expanded ? '' : 'hide'}
          title={title}
          actions={[
            <Popconfirm
              title="Are you sure reset?"
              onConfirm={this.handleResetTheme}
              // onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button
                type="primary"
                size="small"
                onClick={this.handleResetTheme}
              >
                Reset
              </Button>
            </Popconfirm>,
            <Button
              type="primary"
              size="small"
              onClick={this.handleSaveLess}
            >
              Save less
            </Button>,
            <Button
              type="primary"
              size="small"
              onClick={this.handleSaveJs}
            >
              Save js
            </Button>
          ]}
        >
          <Search
            placeholder="input search text"
            onChange={this.handleSearch}
          />
          {varsBody}
        </Card>
      </div>
    );
  }
}

export default ThemeCard;
