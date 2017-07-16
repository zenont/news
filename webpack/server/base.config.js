const path = require('path')

const rootDir = '../../src/server'
const distDir = '../../dist'

const config = {
	context: path.join(__dirname, rootDir),
	entry: { server: './index.js' },
	target: 'node',
	output: {
		path: path.join(__dirname, distDir),
		filename: '[name].bundle.js',
		publicPath: distDir,
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
}

export default config
