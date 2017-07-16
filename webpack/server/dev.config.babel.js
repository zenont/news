import webpack from 'webpack'
import config from './base.config'

const envPlugin = new webpack.EnvironmentPlugin({
	NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined,
	DEBUG: true
})

config.devtool = 'source-map'
config.plugins = [envPlugin]

export default config
