import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import store from 'store';
import { ConfigProvider } from 'antd';
import Frame from 'layout/Frame';
// import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';

import 'stylesheet/app.less';

const App = () => (
  <Provider {...store}>
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <Route exact path="/" component={Frame} />
      </BrowserRouter>
    </ConfigProvider>
  </Provider>
);

export default hot(module)(App);
