const path = require("path");

module.exports = {
	alias: {
		'@': path.resolve(__dirname, '../src'),
		'@scripts': path.resolve(__dirname, '../src/scripts'),
		'@scss': path.resolve(__dirname, '../src/styles/scss'),
		'@img': path.resolve(__dirname, '../src/static/images'),
	},
	modules: [
		'node_modules',
		path.resolve(__dirname, '../src')
	],
	extensions: ['.js', '.ts']
};
