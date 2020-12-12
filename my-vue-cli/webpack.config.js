const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool:"source-map",
  devServer: {
    contentBase: 'src', 
    historyApiFallback: true,   //遇到404重定向到index.html
    overlay: true,    //将错误显示在html之上
    open: 'chrome',
    hot: true,
    port: 9000,
    inline: true,
    noInfo: true,
    proxy: {
      '/api': {
        target: 'https://msg.csdn.net',
        pathRewrite: {'^/api' : ''}
      }
    }
  },
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
      {test: /\.(jpg|jpeg|png|gif|bmp)$/, use: 'url-loader?limit=18593&name=[hash:8]-[name].[ext]'},
      {test: /\.(eot|svg|ttf|woff|woff2)$/, use: 'url-loader'},
      {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
      {test: /\.vue$/, use: 'vue-loader'}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    })
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.js'
    }
  }
}