const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')
const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
  mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
		publicPath: '/container/latest/'
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'container',
			remotes: {
					components: `components@${domain}/components/latest/remoteEntry.js`,
					safora: `safora@${domain}/safora/latest/remoteEntry.js`,
					mea: `mea@${domain}/mea/latest/remoteEntry.js`
			},
			shared: packageJson.dependencies
	}),
	]
}

module.exports = merge(commonConfig, prodConfig)