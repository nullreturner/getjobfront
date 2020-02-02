const path = require('path');

module.exports = {
        test: [/.js$|.ts$/],
        include: [
          path.join(__dirname, '../../src/js'),
          path.join(__dirname, '../../src/ts')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
		    '@babel/typescript',
		    '@babel/preset-env',
	    ],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
	}
}
