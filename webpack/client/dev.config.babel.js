import webpack from 'webpack'
import config from './base.config'

const envPlugin = new webpack.EnvironmentPlugin({
	NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined,
	BOATY_API: 'http://localhost:51327/',
	BOATY_WS_API: 'ws://localhost:3000/',
	DEBUG: true
})

config.devtool = 'source-map'
config.plugins = [
	...config.plugins,
	envPlugin,
	new webpack.NoEmitOnErrorsPlugin(),
	new webpack.HotModuleReplacementPlugin()
]
/*
config.devServer = {
	historyApiFallback: true,
}
*/

export default config
