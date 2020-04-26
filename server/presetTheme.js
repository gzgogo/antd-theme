const antdTheme = require('antd/dist/default-theme')
const antdDarkTheme = require('antd/dist/theme').darkThemeSingle
const aliyunTheme = require('@ant-design/aliyun-theme').default

Object.entries(aliyunTheme).forEach(([key, value]) => {
  // 去除@
  if (key.startsWith('@')) {
    key = key.slice(1)
  }
  aliyunTheme[key] = value
  delete aliyunTheme[`@${key}`]
})

module.exports = {
  'antd': antdTheme,
  'antd-dark': antdDarkTheme,
  'aliyun': aliyunTheme,
}
