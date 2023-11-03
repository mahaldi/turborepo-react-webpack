const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json');
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const prodConfig = {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
		publicPath: '/commons/'
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'commons',
			filename: 'remoteEntry.js',
			exposes: {
				'./Components': './src/components/index',
				'./Utils': './src/utils',
				'./Context': './src/context.jsx',
				'./Slices': './src/slices/index'
			},
			shared: packageJson.dependencies
		})
	]
}

module.exports = merge(commonConfig, prodConfig)