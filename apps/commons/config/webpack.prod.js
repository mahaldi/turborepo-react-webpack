const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { merge } = require('webpack-merge')
const packageJson = require('../package.json');
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
				'./Context': './src/context',
				'./Slices': './src/slices/index',
				'./Theme': './src/styles/theme',
				'./Hooks': './src/hooks/index',
			},
			shared: packageJson.dependencies
		})
	]
}

module.exports = merge(commonConfig, prodConfig)
