const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = new HtmlWebpackPlugin({
	filename: "index.html",
	template: "src/index.html",
	inject: true
});
