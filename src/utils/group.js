const defaultTheme = require('antd/dist/default-theme')

/**
 * 对 antd less vars 进行分组
 */

const color = [
  'blue',
  'purple',
  'cyan',
  'green',
  'magenta',
  'pink',
  'red',
  'orange',
  'yellow',
  'volcano',
  'geekblue',
  'lime',
  'gold',
]

const base = [
  'primary',
  'font',
  'code',
  'line',
  'background',
  'shadow',
  'box',
  'disabled',
  'text',
]

const box = [
  'padding',
  'margin',
  'height',
  'border',
  'outline',
  'grid',
  'layout',
  'screen',
  'zindex',
]

const animation = ['animation', 'ease', 'wave']

const component = [
  'heading',
  'link',
  'btn',
  'checkbox',
  'radio',
  'label',
  'descriptions',
  'collapse',
  'dropdown',
  'empty',
  'form',
  'input',
  'select',
  'mentions',
  'cascader',
  'carousel',
  'badge',
  'rate',
  'anchor',
  'tooltip',
  'popover',
  'modal',
  'progress',
  'menu',
  'spin',
  'table',
  'tag',
  'picker',
  'calendar',
  'card',
  'comment',
  'tabs',
  'back',
  'avatar',
  'switch',
  'pagination',
  'page',
  'breadcrumb',
  'slider',
  'tree',
  'skeleton',
  'transfer',
  'message',
  'alert',
  'list',
  'statistic',
  'drawer',
  'timeline',
  'typography',
  'upload',
  'steps',
  'notification',
]

const list = [].concat(color, base, box, animation, component)

const varMap = {}

Object.entries(defaultTheme).forEach(([name, value]) => {
  let type = name.split('-')[0]
  if (list.indexOf(type) < 0) {
    type = 'other'
  }
  varMap[type] = varMap[type] || []
  varMap[type].push({ name, value })
})

const group = {
  color,
  base,
  box,
  animation,
  component,
}

Object.entries(group).forEach(([type, list]) => {
  group[type] = list.map((item) => {
    let obj = {}
    obj[item] = varMap[item]
    return obj
  })
})

group['base'].push({ other: varMap['other'] })

module.exports = group
