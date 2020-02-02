const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
module.exports = new HtmlWebpackPlugin({
	filename: "index.html",
	template: "src/index.html",
	inject: true
});
*/

const titles = [
	"index",
	"login",
	"register",
	"charts",
	"blank",
	"tables",
	"forgot-password",
	"404"
];

module.exports = titles.map(title => {
	return new HtmlWebpackPlugin({
		template: path.join(__dirname, "../../src/html", `${title}.html`),
		path: path.join(__dirname, "../../dist"),
		filename: `${title}.html`,
		inject: true,
	});
});


