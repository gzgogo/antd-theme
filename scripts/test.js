const fs = require('fs')
const path = require('path')
const group = require('../src/utils/group')

fs.writeFileSync(
  path.resolve(__dirname, 'vars.json'),
  JSON.stringify(group, null, 2),
  'utf8',
)