import webpack from 'webpack';

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'./client/client.js'
	],
	output: {
		path: './dist',
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react'],
					env: {
						development: {
							presets: ['react-hmre']
						}
					}
				}
			}
		]
	}
};
