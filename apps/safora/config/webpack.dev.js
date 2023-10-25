const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json');
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
	mode: 'development',
	output: {
		publicPath: 'http://localhost:8081/'
	},
	devServer: {
		port: 8081,
		historyApiFallback: {
			index: '/index.html'
		}
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'safora',
			filename: 'remoteEntry.js',
			exposes: {
				'./Safora': './src/bootstrap'
			},
			remotes: {
				components: 'components@http://localhost:6969/remoteEntry.js',
			},
			shared: packageJson.dependencies
		})
	]
}
module.exports = merge(commonConfig, devConfig)
