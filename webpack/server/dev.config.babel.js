import webpack from 'webpack'
import WebpackShellPlugin from 'webpack-shell-plugin'
import config from './base.config'

const envPlugin = new webpack.EnvironmentPlugin({
	NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined,
	ASSETS_PATH: '../dist/assets/',
	DEBUG: true
})
const shellPlugin = new WebpackShellPlugin({ onBuildEnd: ['nodemon dist/server.js localhost 3031 --watch dist'] })

config.devtool = 'source-map'
config.plugins = [envPlugin, shellPlugin]

export default config
