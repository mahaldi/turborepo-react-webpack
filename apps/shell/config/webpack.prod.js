const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')
const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
  mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
		publicPath: '/shell/'
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'shell',
			remotes: {
				commons: `commons@${domain}/commons/remoteEntry.js`,
				leadService: `leadService@${domain}/leadService/remoteEntry.js`,
				opportunityService: `opportunityService@${domain}/opportunityService/remoteEntry.js`
			},
			shared: packageJson.dependencies
	}),
	]
}

module.exports = merge(commonConfig, prodConfig)