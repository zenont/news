import webpack from 'webpack'
import config from './base.config'

const envPlugin = new webpack.EnvironmentPlugin({
	NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined,
	DEBUG: true
})
config.entry = {
	app: [
		'babel-polyfill',
		'react-hot-loader/patch',
		// activate HMR for React

		'webpack-dev-server/client?http://localhost:8080',
		// bundle the client for webpack-dev-server
		// and connect to the provided endpoint

		'webpack/hot/only-dev-server',
		// bundle the client for hot reloading
		// only- means to only hot reload for successful updates

		'./index.js',
	],
}
config.devtool = 'eval'
config.plugins = [
	...config.plugins,
	envPlugin,
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NamedModulesPlugin(),
	new webpack.NoEmitOnErrorsPlugin(),
]
config.devServer = {
	historyApiFallback: true,
	hot: true,
	contentBase: './dist',
	// inline: true
}

export default config
