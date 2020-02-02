const htmlWebpackPlugin = require("./html.js");
const copyWebpackPlugin = require("./copy.js");
const cleanWebpackPlugin = require("./clean.js");
const webpackPlugin = require("./internal.js");

module.exports = [
	htmlWebpackPlugin,
	copyWebpackPlugin,
	cleanWebpackPlugin,
	...webpackPlugin,
]
