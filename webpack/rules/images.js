module.exports = {
	test: /\.(png|svg|jpg|gif)$/,
	loader: "url-loader",
	options: {
		limit: 100000,
		name: "static/[name].[hash:7].[ext]"
	}
};
