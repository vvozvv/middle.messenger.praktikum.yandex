const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    chunkIds: false,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
});
