const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const common = require('./webpack.common');
const PATHS = require('./PATHS');
// const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = env => {
  const API = (env || {}).API || 'mock';

  console.log('API %s\n', API);

  const devServer = {
    contentBase: path.resolve(PATHS.dist),
    historyApiFallback: true,
    // compress: true,
    hot: true,
    inline: true,
    disableHostCheck: true,
    // progress: true
  };

  if (API === 'dev') {
    devServer.proxy = {
      '/api': 'http://pre.xxx.com' // 预发地址
    };
  } /* else {
    devServer.proxy = {
      '/api': {
        target: 'http://rap2api.taobao.org',
        pathRewrite: {
          '^/api' : '/app/mock/84445/api'
        }
        // changeOrigin: true,
        // onProxyRes: function(proxyReq, req, res) {
        //   console.log('--------------------------------');
        //   console.log(proxyReq);
        //   console.log(req);
        //   // console.log(res);
        //   console.log('--------------------------------');
        // }
      }
    };
  } */

  return merge(common, {
    entry: {
      main: ['@babel/polyfill', path.resolve(PATHS.src, 'index.js')]
    },
    output: {
      filename: '[name].js',
      path: path.resolve(PATHS.dist),
      publicPath: '/'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: devServer,
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            }
          ]
        },
        {
          test: /\.less$/,
          // exclude: path.resolve(PATHS.src, 'stylesheet'),
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [autoprefixer('last 2 version')],
                sourceMap: true
              }
            },
            {
              loader: "less-loader",
              options: {
                javascriptEnabled: true
              }
            }
          ]
        },
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // new OpenBrowserPlugin({
      //   url: 'http://localhost:8080',
      //   browser: "Google Chrome",
      // }),
      new webpack.DefinePlugin({  // 为项目注入环境变量
        'process.env.API': JSON.stringify(API)
      }),
      new HtmlWebPackPlugin({
        template: path.resolve(PATHS.src, 'template/index.html'),
        filename: path.resolve(PATHS.dist, 'index.html'),
        favicon: path.resolve(PATHS.src, 'asset/image/favicon.png')
      })
    ]
  });
};
