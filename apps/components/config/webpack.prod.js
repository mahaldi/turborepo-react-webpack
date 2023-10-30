const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json');
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const prodConfig = {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
		publicPath: '/components/latest/'
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'components',
			filename: 'remoteEntry.js',
			exposes: {
				'./UI': './src/bootstrap',
				'./Utils': './src/utils',
				'./Context': './src/context.jsx'
			},
			shared: packageJson.dependencies
		})
	]
}

module.exports = merge(commonConfig, prodConfig)