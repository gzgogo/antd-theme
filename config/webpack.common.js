const webpack = require('webpack');
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const PATHS = require("./PATHS");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // {
      //   test: /\.json$/,
      //   type: 'javascript/auto',
      //   use: [
      //     {
      //       loader: 'json-loader'
      //     }
      //   ]
      // },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: path.normalize('asset/[name].[ext]')
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: path.normalize('asset/[name].[ext]')
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: PATHS.src,
      stylesheet: path.resolve(PATHS.src, 'stylesheet'),
      image: path.resolve(PATHS.src, 'asset/image'),
      layout: path.resolve(PATHS.src, 'layout'),
      component: path.resolve(PATHS.src, 'component'),
      page: path.resolve(PATHS.src, 'page'),
      util: path.resolve(PATHS.src, 'util'),
      constant: path.resolve(PATHS.src, 'constant'),
      store: path.resolve(PATHS.src, 'store'),
      theme: path.resolve(PATHS.src, 'theme')
    }
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CopyWebpackPlugin([
      {
        from: path.resolve(PATHS.src, 'stylesheet/antd.less'),
        to: path.resolve(PATHS.dist, 'antd.less')
      },
      {
        from: path.resolve(PATHS.src, 'pwa'),
        to: PATHS.dist,
      },
      {
        from: path.resolve(PATHS.src, 'asset/js/less.min.js'),
        to: PATHS.dist,
      }
    ]),
  ]
};
