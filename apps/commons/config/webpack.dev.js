const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { merge } = require('webpack-merge')
const packageJson = require('../package.json');
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
			name: 'commons',
			filename: 'remoteEntry.js',
			exposes: {
				'./Components': './src/components/index',
				'./Utils': './src/utils',
				'./Context': './src/context.jsx',
				'./Slices': './src/slices/index',
				'./Styles': './src/styles/index.scss',
				'./Hooks': './src/hooks/index',

			},
			shared: packageJson.dependencies
		})
	]
}

module.exports = merge(commonConfig, devConfig)
