const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: 'production',
  optimization: {
    chunkIds: false,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
};
