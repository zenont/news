const path = require('path')
const fs = require('fs')

/* required hack for server code when running in webpack as described here http://tinyurl.com/ya9jbu97 */
let nodeModules = {}
fs.readdirSync('node_modules')
	.filter(function (x) {
		return ['.bin'].indexOf(x) === -1
	})
	.forEach(function (mod) {
		nodeModules[mod] = 'commonjs ' + mod
	})

const rootPath = '../../src/server'
const outputPath = path.join(__dirname, '../../dist/')
const publicPath = '/'

const config = {
	context: path.join(__dirname, rootPath),
	entry: { server: './index.js' },
	target: 'node',
	output: {
		path: outputPath,
		filename: '[name].js',
		publicPath: publicPath,
		libraryTarget: 'commonjs2',
	},
	module: {
		rules: [
			/*{
				test: /\.(sass|scss)$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: true,
							importLoaders: 1,
							sourceMap: false,
						},
					},
					{ loader: 'sass-loader' }
				]
			},*/
			{
				test: /\.(sass|scss|css)$/,
				use: [
					'isomorphic-style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [['es2015', { 'modules': false }], 'react', 'stage-0'],
						plugins: ['transform-class-properties', 'transform-decorators-legacy', 'transform-object-rest-spread']
					}
				}],
			},
		],
	},
	externals: nodeModules
}

export default config
