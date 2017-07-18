const path = require('path')
import { outputPath, publicPath } from '../paths'
/* required hack for server code when running in webpack as described here http://tinyurl.com/ya9jbu97 */
var fs = require('fs')
var nodeModules = {}
fs.readdirSync('node_modules')
	.filter(function (x) {
		return ['.bin'].indexOf(x) === -1
	})
	.forEach(function (mod) {
		nodeModules[mod] = 'commonjs ' + mod
	})

const rootDir = '../../src/server'

const config = {
	context: path.join(__dirname, rootDir),
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
