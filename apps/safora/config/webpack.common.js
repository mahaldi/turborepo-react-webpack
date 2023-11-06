const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-react', '@babel/preset-env' ],
						plugins: [ '@babel/plugin-transform-runtime' ]
					}
				}
			},
			{
				test: /\.css$/i,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './public/index.html'
		})
	]
};
