const path = require('path')
const fs = require('fs')
const { execSync } = require('child_process')
const bundle = require('less-bundle-promise')

// 遍历src目录，寻找所有的 style.less 文件
const basePath = path.resolve(__dirname, '../src')

const files = execSync(`find ${basePath} -name style.less`, {
  encoding: 'utf-8',
})
  .split(/\n/)
  .map((item) => {
    return path.relative(basePath, item)
  })
  .filter((item) => item !== '..')

// main.less @import style.less
const lessPath = path.resolve(__dirname, '../src/main.less')
fs.writeFileSync(lessPath, '')
fs.appendFileSync(lessPath, `@import '~antd/dist/antd.less';\n`, 'utf8')
files.forEach((item) => {
  fs.appendFileSync(lessPath, `@import '${item}';\n`, 'utf8')
})

// 将所有的 less 文件进行合并
bundle({
  src: lessPath,
  dest: path.resolve(__dirname, '../public/antd.less'),
  writeFile: true,
})
  .then((/* output */) => {})
  .catch((error) => {
    console.log('Error', error)
  })
