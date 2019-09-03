import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import store from 'store';
import { LocaleProvider } from 'antd';
import Frame from 'layout/Frame';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

import 'stylesheet/app.less';

const App = () => (
  <Provider {...store}>
    <LocaleProvider locale={zh_CN}>
      <BrowserRouter>
        <Route exact path="/" component={Frame} />
      </BrowserRouter>
    </LocaleProvider>
  </Provider>
);

export default hot(module)(App);
