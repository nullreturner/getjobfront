/*
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = new MiniCssExtractPlugin({ 
	//filename: 'css/style.css',
	filename: 'app.[contenthash:8].css',
	chunkFilename: 'chunk.[id].css'
});
*/

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = new ExtractTextPlugin('style.css');

