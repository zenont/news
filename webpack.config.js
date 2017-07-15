import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
const path = require('path')

const phaserModule = path.join(__dirname, '/node_modules/phaser-ce/')
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
const pixi = path.join(phaserModule, 'build/custom/pixi.js')
const p2 = path.join(phaserModule, 'build/custom/p2.js')

// html plugin
const htmlPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, './src/index.html'),
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
	context: path.join(__dirname, './src'),
	entry: {
		app: './index.js',
	},
	output: {
		path: path.join(__dirname, './dist'),
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
			{ test: /pixi\.js/, use: ['expose-loader?PIXI'] },
			{ test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
			{ test: /p2\.js/, use: ['expose-loader?p2'] }
		],
	},
	plugins: [commonChunksPlugin, htmlPlugin],
	resolve: {
		alias: {
			'phaser': phaser,
			'pixi': pixi,
			'p2': p2
		}
	}
}

export default config
