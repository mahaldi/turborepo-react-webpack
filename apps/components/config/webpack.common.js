const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	resolve: {
        extensions: ['.jsx', '.js'],
    },
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
						plugins: ['@babel/plugin-transform-runtime']
					}
				}
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({})
	]
}