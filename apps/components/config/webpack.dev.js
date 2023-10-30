const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json');
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
	mode: 'development',
	output: {
		publicPath: 'http://localhost:6969/'
	},
	devServer: {
		port: 6969
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'components',
			filename: 'remoteEntry.js',
			exposes: {
				'./UI': './src/bootstrap',
				'./Utils': './src/utils',
				'./Context': './src/context',
				'./Test': './src/test'
			},
			shared: packageJson.dependencies
		})
	]
}

module.exports = merge(commonConfig, devConfig)