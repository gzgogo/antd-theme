const fs = require('fs')
const readline = require('readline')
const path = require('path')

/**
 * 分析 default.less 文件，按照注释规则分组
 * 弃用，不稳定，会出现重复key，改用 utils/group.js
 */

const rl = readline.createInterface({
  input: fs.createReadStream(
    path.resolve(
      __dirname,
      '../node_modules/antd/lib/style/themes/default.less',
    ),
  ),
  crlfDelay: Infinity,
})

const lineList = []

rl.on('line', (line) => {
  if (line.length !== 0) {
    lineList.push(line)
  }
})

rl.on('close', () => {
  const groupList = []
  lineList.forEach((line, index) => {
    if (line.startsWith('// ---')) {
      const group = {}
      if (lineList[index - 1].startsWith('// ')) {
        group.name = lineList[index - 1].slice(3)
        group.index = index - 1
      } else {
        // handle Colors
        group.name = 'Colors'
        group.index = index
      }
      groupList.push(group)
    }
  })

  groupList.forEach((group, index) => {
    let start = group.index
    let end =
      index < groupList.length - 1 ?
      groupList[index + 1].index :
      lineList.length
    let children = lineList
      // 分组
      .slice(start, end)
      // 去除行上注释
      .filter((item) => !item.startsWith('// '))
      // 去除行内注释
      .map((item) => {
        return item.split('//')[0].trim()
      })
      // 连接再分割，处理换行元素
      .join('')
      .split(';')
      .filter((item) => item !== '')
      // 转换为对象
      .map((item) => {
        let obj = {}
        let [name, value] = item.split(':')
        value = value.replace(';', '').trim()
        obj.name = name
        obj.value = value
        return obj
      })
    group.children = children
    delete group.index
  })
  fs.writeFileSync(
    path.resolve(__dirname, '../src/vars.json'),
    JSON.stringify(groupList, null, 2),
    'utf8',
  )
})