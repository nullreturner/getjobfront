/*
module.exports = {
	test: /\.scss$/,
	use: [
	  'style-loader',
	  'css-loader',
	  'sass-loader'
	]
}
*/

const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

		/*
module.exports = {
        test: /\.(sa|sc)ss$/,
        use: [
		MiniCssExtractPlugin.loader,
		'css-loader',
		'sass-loader',
		//'postcss-loader',
		{
			loader: 'postcss-loader',
			options: {
				plugins: () => [
					require('autoprefixer'),
					require('postcss-import')
				],
			}
		},
        ]
};
		*/


module.exports = {
	test: /\.scss$/,
	use: ExtractTextPlugin.extract({
		fallback: 'style-loader',
		use: ['css-loader', 'sass-loader']
	})
};
