
import dark from 'antd/dist/dark-theme';
import aliyun from '@ant-design/aliyun-theme';
import test1 from 'dporyadintesttheme1';

const themeVars = require('../vars.json');

const defaultTheme = {};
const darkTheme = {};

Object.keys(dark).forEach((key) => {
  darkTheme[`@${key}`] = dark[key];
});

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
  dark: darkTheme,
  test1,
  aliyun
};
