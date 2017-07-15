import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
const path = require('path')

const clientRoot = './src/client'
const distRoot = './dist'

// html plugin
const htmlPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, clientRoot, 'index.html'),
	filename: 'index.html',
	inject: 'body'
})

// common chunks
const commonChunksPlugin = new webpack.optimize.CommonsChunkPlugin({
	name: 'commons',
	filename: 'commons.js',
	minChunks: 2,
})

const config = {
	context: path.join(__dirname, clientRoot),
	entry: {
		app: './index.js',
	},
	output: {
		path: path.join(__dirname, distRoot),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(jpe?g|png|gif|svg|jpg|json)$/i,
				exclude: /node_modules/,
				loader: 'file-loader'
			},
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [['es2015', { 'modules': false }]],
						plugins: ['transform-class-properties', 'transform-decorators-legacy', 'transform-object-rest-spread']
					}
				}],
			},
		],
	},
	plugins: [commonChunksPlugin, htmlPlugin],
	resolve: {
		alias: {
		}
	}
}

export default config
