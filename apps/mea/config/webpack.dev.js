const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json');
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
	mode: 'development',
	output: {
		publicPath: 'http://localhost:8082/'
	},
	devServer: {
		port: 8082,
		historyApiFallback: {
			index: '/index.html'
		}
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'mea',
			filename: 'remoteEntry.js',
			exposes: {
				'./Mea': './src/bootstrap'
			},
			remotes: {
				components: 'components@http://localhost:6969/remoteEntry.js',
			},
			shared: packageJson.dependencies
		})
	]
}
module.exports = merge(commonConfig, devConfig)
