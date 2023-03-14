const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      watch: true
    },
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 3000,
  },
});
