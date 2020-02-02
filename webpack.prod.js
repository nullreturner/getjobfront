const merge = require('webpack-merge');
const common = require('./webpack/webpack.common.js');
const scssRule = require('./webpack/_prod/scss.js');
const extractTextPlugin = require('./webpack/_prod/extract.js');


module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      scssRule
    ]
  },
  plugins: [
    extractTextPlugin
  ]
});
