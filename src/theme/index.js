
import dark from '@ant-design/dark-theme';
import aliyun from '@ant-design/aliyun-theme';

const themeVars = require('../vars.json');

const defaultTheme = {};

themeVars.forEach((group) => {
  group.children.forEach((item) => {
    let { value } = item;
    if (item.type === 'number') {
      value += item.unit;
    }
    defaultTheme[item.name] = value;
  });
});

export default {
  default: defaultTheme,
  dark,
  aliyun
};
