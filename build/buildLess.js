const bundle = require('less-bundle-promise');

bundle({
  src: './src/stylesheet/app.less',
  dest: './src/stylesheet/antd.less',
  writeFile: true
}).then((/* output */) => {
  // console.log(output);
}).catch((error) => {
  console.log('Error', error);
});
