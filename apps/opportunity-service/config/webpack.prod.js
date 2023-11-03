const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json');
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
		publicPath: '/opportunityService/'
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'opportunityService',
			filename: 'remoteEntry.js',
			exposes: {
				'./bootstrap': './src/bootstrap'
			},
			remotes: {
				commons: `commons@${domain}/commons/remoteEntry.js`,
			},
			shared: packageJson.dependencies
		})
	]
}

module.exports = merge(commonConfig, prodConfig)