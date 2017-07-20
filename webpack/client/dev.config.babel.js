import webpack from 'webpack'
import config from './base.config'

const envPlugin = new webpack.EnvironmentPlugin({
	NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined,
	DEBUG: true
})

config.devtool = 'eval'
config.plugins = [
	...config.plugins,
	envPlugin,
	new webpack.NoEmitOnErrorsPlugin(),
	new webpack.HotModuleReplacementPlugin()
]

config.devServer = {
	historyApiFallback: true,
}

export default config
