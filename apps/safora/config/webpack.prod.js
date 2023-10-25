const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json');
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
		publicPath: '/safora/latest/'
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'safora',
			filename: 'remoteEntry.js',
			exposes: {
				'./Safora': './src/bootstrap'
			},
			remotes: {
				components: `components@${domain}/components/latest/remoteEntry.js`,
			},
			shared: packageJson.dependencies
		})
	]
}

module.exports = merge(commonConfig, prodConfig)