/**
 * @name 请求API代理
 * @author gongzhen
 * @param options
 * @param 参数详解：https://github.com/axios/axios
 * @since 2018-09-13
 */
import axios from 'axios';
import errorHint from './errorHint';
import loginUtil from '../login';

// 默认配置
axios.defaults.method = 'post';
axios.defaults.withCredentials = true;

const noNeedAuthAPI = [
  '/api/v1/captcha',
  '/api/v1/user/auth/captcha'
];

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // console.log('axios.interceptors.request.use ', process.env.API === 'mock');
  if (process.env.API === 'mock') {
    config.url = `http://rap2api.taobao.org/app/mock/121297/${config.method}${config.url}`;
  } else {
    if (noNeedAuthAPI.indexOf(config.url) > -1) {
      return config;
    }

    const userInfo = loginUtil.getUserInfo();
    if (userInfo && userInfo.token) {
      config.headers.common.Authorization = userInfo.token;
    } else {
      window.location.href = '/login';
    }
  }
  // console.log('show request: ', config);

  return config;
});

const request = (options, resolve) => axios({ ...options }).then((resp) => {
  // console.log('resp', resp);
  const data = resp.data || {};
  resolve(data);

  if (data.code !== 200 && options.handle === false) {
    errorHint.push(data.msg);
  }
}).catch((err) => {
  const data = {
    status: false,
    code: '-1',
    msg: `HTTP ERROR: ${err.message}`
  };
  resolve(data);
  errorHint.push(data.msg);
});

const ajax = options => new Promise(resolve => request(options, resolve));

export default ajax;
