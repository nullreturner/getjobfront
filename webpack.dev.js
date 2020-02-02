const merge = require('webpack-merge');
const common = require('./webpack/webpack.common.js');
const scssRule = require('./webpack/_dev/scss.js');
const { hotModuleReplacementPlugin } = require('./webpack/_dev/internal.js');


module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      scssRule
    ]
  },
  plugins: [
    hotModuleReplacementPlugin
  ],
  devServer: {
    hot: true
  },
  devtool: "cheap-module-eval-source-map",
});
