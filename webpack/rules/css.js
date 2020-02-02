const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
      use: [
	     'style-loader', 
	     'css-loader',
	     'postcss-loader',
      ],
    }),
};
