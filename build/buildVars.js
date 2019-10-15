const fs = require('fs');
const readline = require('readline');
const vars = require('../src/vars');

const varsObj = {};

const rl = readline.createInterface({
  input: fs.createReadStream('./node_modules/antd/lib/style/themes/default.less'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  // console.log(line);
  if (line.startsWith('@')) {
    const [name, value] = line.split(':');
    if (name && value) {
      const temp = value.split('//')[0]; // 去掉行尾注释
      varsObj[name] = temp.replace(';', '').trimLeft();
    }
  }
});

rl.on('close', () => {
  // console.log(varsObj);

  vars.forEach((group) => {
    group.children.forEach((item) => {
      const value = varsObj[item.name];
      if (value) {
        item.value = item.type === 'number' ? parseFloat(value) : value;
      }
    });

    fs.writeFileSync('./src/vars.json', JSON.stringify(vars, null, 2), 'utf8');
  });
});

