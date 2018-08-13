var webpack = require('webpack');

module.exports = {
	entry: {
		'app': './assets/app/main.ts'
	},

	mode: 'development',

	resolve: {
		extensions: ['.js', '.ts']
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [
				'awesome-typescript-loader',
				'angular2-template-loader',
				'angular2-router-loader'
				]
			},
			{
				test: /\.html$/,
				use: 'html-loader'
			},
			{
				test: /\.css$/,
				use: 'raw-loader'
			}
		]
	},

	plugins: [
		new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            './src' // location of your src
        )
	]
};
