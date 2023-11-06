const HTMLWebpackPlugin = require('html-webpack-plugin');
const cssnano = require('cssnano');

let localIdentName = '[local]__[name]';
  if (process.env.NODE_ENV === 'production') {
    localIdentName += '___[hash:base64:5]';
}
const cssModulesLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: true,
      importLoaders: true,
	  modules: {
        localIdentName
      },
    }
};
const POST_CSS_LOADER = {
	loader: 'postcss-loader',
	options: {
	  postcssOptions: {
		plugins: [
		  cssnano({
			autoprefixer: {
			  add: true,
			  remove: false,
			  browsers: ['last 6 versions']
			},
			discardComments: {
			  removeAll: true
			},
			discardUnused: false,
			mergeIdents: false,
			reduceIdents: false,
			safe: true,
			sourcemap: true
		  })
		]
	  }
	}
};
const SASS_LOADER = {
	loader: 'sass-loader',
	options: {
	  sourceMap: true,
	  implementation: require.resolve('node-sass')
	}
};
module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
						plugins: ['@babel/plugin-transform-runtime'],
					},
				},
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					cssModulesLoader,
					POST_CSS_LOADER,
					SASS_LOADER
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					cssModulesLoader,
					POST_CSS_LOADER
				  ]
			}
		],
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.scss'],
	},
	plugins: [new HTMLWebpackPlugin({})],
};
