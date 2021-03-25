const fs = require('fs');
const readline = require('readline');
const vars = require('../src/vars');

const varsObj = {};

const rl = readline.createInterface({
  input: fs.createReadStream('./node_modules/antd/lib/style/themes/default.less'),
  crlfDelay: Infinity
});

let multiLine = '';
rl.on('line', (line) => {
  if (line.startsWith('@')) {
    if (line.includes(';') && !multiLine) {
      setVarsObjValue(line);
      multiLine = '';
    }
    multiLine += line;
  } else if (multiLine) {
    multiLine += line;
  }

  if (multiLine.includes(';')) {
    setVarsObjValue(multiLine);
    multiLine = '';
  }
});

function setVarsObjValue(line) {
  const [name, value] = line.split(':');
  if (name && value) {
    const temp = value.split('//')[0]; // 去掉行尾注释
    varsObj[name] = temp.replace(';', '').trimLeft();
  }
}

rl.on('close', () => {
  // console.log(varsObj);

  vars.forEach((group) => {
    group.children.forEach((item) => {
      const value = varsObj[item.name];
      if (value) {
        item.value = item.type === 'number' ? parseFloat(value) : value;
        // 兼容 type 定义异常的数据
        if (Number.isNaN(item.value)) {
          item.value = value;
          item.type = 'string';
          delete item.unit;
        }
      }
    });

    fs.writeFileSync('./src/vars.json', JSON.stringify(vars, null, 2), 'utf8');
  });
});

