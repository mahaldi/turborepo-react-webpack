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
				'./Theme': './src/styles/theme',
				'./Hooks': './src/hooks/index',
				'./Assets': './src/assets/index'
			},
			shared: packageJson.dependencies
		})
	]
}

module.exports = merge(commonConfig, devConfig)
