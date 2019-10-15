const fs = require('fs');
const path = require('path');

const entryFile = process.argv[2];
const outputFile = process.argv[3] || './antd-combine.less';

if (entryFile) {
  const result = combine(entryFile);
  fs.writeFileSync(outputFile, result, 'utf-8');
  console.log('finish!');
}

function combine(fileName, loadedList) {
  if (!Array.isArray(loadedList)) {
    loadedList = [];
  }
  console.log('fileName: %s', fileName);

  let result = fs.readFileSync(fileName, 'utf-8');

  loadedList.push(fileName);

  // console.log('result: %s', result);

  while (1) {
    const res = result.match(/@import ?["'](.*?)["'];/);
    if (res && res[1]) {
      // console.log('res[1]: %s', res[1]);

      let subPath = path.resolve(path.dirname(fileName), res[1]);

      if (!subPath.endsWith('.less')) {
        subPath += '.less';
      }

      // console.log('subPath: %s', subPath);

      if (loadedList.indexOf(subPath) < 0) {
        const lessCode = combine(subPath, loadedList);
        const reg = new RegExp(`@import ["']${res[1]}["'];`);
        result = result.replace(reg, lessCode);
      } else {
        const reg = new RegExp(`@import ["']${res[1]}["'];`);
        result = result.replace(reg, '');
      }
    } else {
      return result;
    }
  }
}
