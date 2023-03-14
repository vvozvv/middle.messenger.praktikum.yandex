const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: 'production',
  optimization: {
    minimize: true,
    chunkIds: false,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
};
