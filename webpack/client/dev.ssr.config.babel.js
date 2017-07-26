const path = require('path')
import webpack from 'webpack'
import config from './base.config'

const outputPath = path.join(__dirname, '../../dist/assets')
const publicPath = '/assets'

const envPlugin = new webpack.EnvironmentPlugin({
	NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined,
	NEWS_API_URL: 'https://newsapi.org/v1/',
	NEWS_API_KEY: '9ed8490dae88488d98020bd516cbfe47',
	DEBUG: true
})
config.entry = {
	app: [
		'babel-polyfill',
		'./index.js',
	],
}
config.output = {
	path: outputPath,
	filename: '[name].js',
	publicPath: publicPath
}
config.devtool = 'source-map' // 'eval'
config.plugins = [
	...config.plugins,
	envPlugin,
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NamedModulesPlugin(),
	new webpack.NoEmitOnErrorsPlugin(),
]

export default config
