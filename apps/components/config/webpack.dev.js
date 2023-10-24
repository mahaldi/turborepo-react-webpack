const HTMLWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json');

module.exports = {
	mode: 'development',
	output: {
		publicPath: 'http://localhost:6969/'
	},
	devServer: {
		port: 6969
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
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
		new HTMLWebpackPlugin({
			template: './public/index.html',
			filename: './index.html',
			favicon: './public/favicon.ico'
		}),
		new ModuleFederationPlugin({
			name: 'components',
			filename: 'remoteEntry.js',
			exposes: {
				'./ComponentsApp': './src/bootstrap'
			},
			shared: packageJson.dependencies
		})
	]
}