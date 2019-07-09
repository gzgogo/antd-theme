# Antd Pro Mobx

一个精简版的基于mobx的[Ant Design Pro](https://pro.ant.design/index-cn)

[预览](http://gongzhen.coding.me)

## 使用方法
* `npm run mock`: 使用[rap2](http://rap2.taobao.org/)工具mock接口
* `npm run dev`: 使用实际接口，需要将webpack.dev.js文件第27行的 ’http://pre.xxx.com‘ 修改为实际地址
* `npm run build`: 构建打包，可将生成的dist目录的内容交给后端
* `npm run doc`: 该命令用于预览

## 为什么做这个项目？
[Antd Pro](https://pro.ant.design/index-cn) 是一个大而全，且高度封装的脚手架，帮开发者做了很多基础工作，但不免提升了学习成本， 尤其内部依赖了`dva `和`umi`，限制住了开发者的同时也让开发者失去了对 webpack 的绝对控制权。所 以我利用业务时间做了这个基于`mobx`的精简版antd pro，简化了登录注册流程，将`dva`换成了class based 的`mobx`，使代码结构更清晰更易组织，去掉了底层 umi，使用者可以直接控制 webpack，更灵活，降低了学习成本，开发者可以快速上手，投入进业务开发。且内置了友盟统计，可以看到网站的 基本使用情况并使用高级分析，分群，画像，推送等高级功能。目前已有两家企业基于此开发并上线。

## 适合哪些人使用？
1. 不喜欢`dva`，更喜欢用基于类的`mobx`做状态管理
2. 对`umi`框架不熟悉，更想直接操作webpack
3. 前期不需要适配手机端，希望PC版尽快上线

## 相比Antd Pro，去掉了哪些东西？
1. 状态管理从`dva`换成了`mobx`
2. 去掉了`umi`，改成了直接操作webpack
3. mock改用阿里推出的 [rap2](http://rap2.taobao.org/)
3. 去掉了手机端的适配，方便快速完成PC版
4. 去掉了测试相关的东西
5. 去掉了多语言相关的东西
>此项目的目的是帮助开发者尽快完成PC网站的开发，去掉的东西后期如果需要，可以参考[Antd Pro](https://pro.ant.design/index-cn) 项目逐渐迭代回去。

## 相比Antd Pro，做了哪些改进和补充？
1. CSS Modules使用了[react-css-modules](https://github.com/gajus/react-css-modules)方案，相比css-loader的modules方案更灵活。
2. 增加了异步路由，方便首页做进一步优化。
3. 增加了OSS上传组件，使用[STS](https://help.aliyun.com/document_detail/32077.html?spm=a2c4g.11186623.6.788.qrBaau)方案上传，需要开发者自行购买资源。
4. 图表库由`BizChart`改用了`highcharts`，这个算不上优化，但是相对于阿里外的开发者`highcharts`可能更好用一些
5. 内置了[友盟](https://udplus.umeng.com/)统计，为前端路由跳转增加了page load事件

## 有哪些地方可以完善？
1. 登录目前只有手机号+验证码直接登录，可以补充其他登录方式，但与此同时，你还要提供注册+密码找回+修改密码
2. 目前路由已经收敛进一个组件，但还不够集中，最好可以像router3一样集中管理（请不要问我为什么不直接用router3…，不做怎么知道后悔）
3. CSS Modules使用了[react-css-modules](https://github.com/gajus/react-css-modules)方案，相比antd pro更灵活了一些，但是[babel-plugin-react-css-modules](https://github.com/gajus/babel-plugin-react-css-modules)应该是更好的方案，这样css就相对于js透明了
4. 分包方案：目前提供了同步路由和异步路由两种方式，欢迎这方面的大牛进一步改进。同时分包依赖业务，针对业务应该会有更优的分包方案。
5. 肯定还有很多我未想到或发现的，欢迎各位大神指点并贡献代码，我会积极merge大家的pr。

## 主要的依赖及版本
1. webpack 4
2. router 4
3. react 16
4. mobx 5
5. axios
6. antd + ant-design-pro
7. ali-oss 6

