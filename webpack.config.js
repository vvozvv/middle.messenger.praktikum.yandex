const { merge } = require('webpack-merge');
const common = require('./config/webpack.common.js');
const devConfig = require('./config/webpack.dev.js');
const proConfig = require('./config/webpack.prod');

module.exports = (env, args) => {
  switch(args.mode) {
    case 'development':
      return merge(common, devConfig);
    case 'production':
      return merge(common, proConfig);
    default:

  }
}
