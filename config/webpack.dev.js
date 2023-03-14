const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      watch: true
    },
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 3000,
  }
};
