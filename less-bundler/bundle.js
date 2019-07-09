var bundle = require('less-bundle-promise');

bundle({
  src: './node_modules/antd/dist/antd.less',
  dest: 'bundle.less',
  writeFile: true
}).then(output =>{
// do something with output less
}).catch(error => {
console.log('Error', error);
});