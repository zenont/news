import { Configuration, EnvironmentPlugin, HotModuleReplacementPlugin, NamedModulesPlugin, NoEmitOnErrorsPlugin } from 'webpack'
import { join } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const rootPath = '../../src/client'
const outputPath = join(__dirname, '../../dist/')
const publicPath = '/'

const envPlugin = new EnvironmentPlugin({
	NODE_ENV: 'development',
	NEWS_API_URL: 'https://newsapi.org/v1/',
	NEWS_API_KEY: '9ed8490dae88488d98020bd516cbfe47',
	DEBUG: true
})

const htmlPlugin = new HtmlWebpackPlugin({
	template: join(__dirname, rootPath, 'index.html'),
	filename: 'index.html',
	inject: 'body'
})

export default (): Configuration => {
	const hostPort: number = Number.parseInt(process.env.LOCAL_HOST_PORT || '9009')
	const config: Configuration = {
		entry: {
			app: [
				'babel-polyfill',
				'react-hot-loader/patch',
				// activate HMR for React

				`webpack-dev-server/client?http://localhost:&{hostPort}`,
				// bundle the client for webpack-dev-server
				// and connect to the provided endpoint

				'webpack/hot/only-dev-server',
				// bundle the client for hot reloading
				// only- means to only hot reload for successful updates

				'./index.tsx',
			],
		},
		output: {
			path: outputPath,
			filename: '[name].js',
			publicPath
		},
		module: {
			rules: [
				{
					test: /\.(jpe?g|png|gif|svg|jpg|json)$/i,
					exclude: /node_modules/,
					loader: 'file-loader'
				},
				{
					test: /\.(sass|scss)$/,
					use: [
						{
							loader: 'style-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
							},
						},
						{ loader: 'sass-loader' }
					]
				},
				{
					test: /\.(ico)$/i,
					exclude: /node_modules/,
					loader: 'file-loader?name=[name].[ext]'
				},
				{
					test: /\.tsx?$/,
					exclude: [/node_modules/],
					use: [{
						loader: 'babel-loader',
						options: {
							presets: [['env', { modules: false }], 'stage-0', 'react'],
							plugins: [
								'transform-class-properties',
								'transform-decorators-legacy',
								'transform-object-rest-spread',
								'react-hot-loader/babel',
							],
							babelrc: false
						}
					}],
				},
				{
					test: /\.tsx?$/,
					loader: 'ts-loader',
					options: {
						compilerOptions: {
							target: 'es6',
							module: 'es2015',
							allowSyntheticDefaultImports: true,
							esModuleInterop: true,
							jsx: 'preserve'
						}
					},
				}
			],
		},
		resolve: {
			extensions: ['ts', 'tsx', 'js', 'jsx']
		},
		devtool: 'eval',
		plugins: [
			envPlugin,
			htmlPlugin,
			new HotModuleReplacementPlugin(),
			new NamedModulesPlugin(),
			new NoEmitOnErrorsPlugin(),
		],
		devServer: {
			historyApiFallback: true,
			hot: true,
			contentBase: './dist',
			port: hostPort
		}
	}
	return config
}
