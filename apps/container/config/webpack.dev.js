const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

const devConfig = {
	mode: 'development',
	output: {
		publicPath: 'http://localhost:8080/'
	},
	devServer: {
		port: 8080,
		historyApiFallback: {
			index: '/index.html'
		}
	},
	plugins: [
		new ModuleFederationPlugin({
				name: 'container',
				remotes: {
						components: 'components@http://localhost:6969/remoteEntry.js',
						// safora: 'safora@http://localhost:8081/remoteEntry.js',
						// mea: 'mea@http://localhost:8082/remoteEntry.js'
				},
				shared: packageJson.dependencies
		}),
	]
}
module.exports = merge(commonConfig, devConfig)
