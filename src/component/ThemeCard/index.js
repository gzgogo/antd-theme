import React, { Component } from 'react'
import { Spin, Card, message, Popconfirm } from 'antd'
import request from 'umi-request'
import Header from './Header'
import Filter from './Filter'
import Group from './Group'
import Preview from './Preview'

class ThemeCard extends Component {
  constructor(props) {
    super(props)
    const currentTheme = localStorage.getItem('currentTheme')
      ? localStorage.getItem('currentTheme')
      : 'antd'
    this.state = {
      themes: {},
      vars: {},
      currentTheme,
      filter: {
        type: 'key',
        value: '',
      },
      previewVisible: false,
      loading: false,
    }

    request.get('/api/theme').then((themes) => {
      this.setState({
        themes,
        vars: themes[currentTheme]
      })
      this.changeLess(`load Theme: ${currentTheme}`)
    })
  }

  changeLess = (msg) => {
    this.setState({ loading: true })
    // 此处需要强制重绘，否则 loading 不生效
    setTimeout(() => {
      window.less
        .modifyVars(this.state.vars)
        .then(() => {
          msg && message.success(msg)
          this.setState({ loading: false })
        })
        .catch((err) => {
          console.error(err)
          message.error('Failed update')
          this.setState({ loading: false })
        })
    }, 0)
  }

  onFieldChange = (key, value) => {
    this.setState((state) => {
      state.vars[key] = value
      return state
    })
  }

  onThemeChange = (theme) => {
    const vars = this.state.themes[theme]
    this.setState({
      vars,
      currentTheme: theme,
    })
    this.changeLess(`load Theme: ${theme}`)
    localStorage.setItem('currentTheme', theme)
  }

  addTheme = (theme) => {
    this.setState((state) => {
      state.themes = Object.assign(state.themes, theme)
      return state
    })
  }

  removeTheme = () => {
    const { currentTheme } = this.state
    request.delete('/api/theme', {
      params: {
        name: currentTheme,
      },
    })
    this.setState((state) => {
      delete state.themes[currentTheme]
      return state
    })
    this.onThemeChange('antd')
  }

  onThemeCardToggle = () => {
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  renderActions = () => {
    const { currentTheme } = this.state
    const actions = []
    actions.push(
      <div onClick={() => this.setState({ previewVisible: true })}>
        Preiview
      </div>,
    )
    if (['antd', 'antd-dark', 'aliyun'].indexOf(currentTheme) < 0) {
      actions.push(
        <Popconfirm
          title={`remove theme: ${currentTheme} ?`}
          onConfirm={this.removeTheme}
          okText="Yes"
          cancelText="No"
        >
          <div>Remove</div>
        </Popconfirm>,
      )
    }
    return actions
  }

  render() {
    const {
      loading,
      themes,
      currentTheme,
      vars,
      filter,
      previewVisible,
    } = this.state

    return (
      <>
        {loading && (
          <div className="spin-container">
            <Spin size="large" />
          </div>
        )}
        <div className="theme-card">
          <Card
            title={
              <Header
                themes={themes}
                currentTheme={currentTheme}
                onThemeChange={this.onThemeChange}
                addTheme={this.addTheme}
              />
            }
            actions={this.renderActions()}
          >
            <Filter
              filter={filter}
              onFilterChange={(filter) => this.setState({ filter })}
            />
            <Group
              vars={vars}
              filter={filter}
              onFieldChange={this.onFieldChange}
              onFieldComplete={this.changeLess}
            />
          </Card>
          <Preview
            themes={themes}
            currentTheme={currentTheme}
            vars={vars}
            visible={previewVisible}
            onHide={() => this.setState({ previewVisible: false })}
          />
        </div>
      </>
    )
  }
}

export default ThemeCard
