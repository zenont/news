import {
	Configuration,
	Entry,
	EnvironmentPlugin,
	HotModuleReplacementPlugin,
	NamedModulesPlugin,
	NoEmitOnErrorsPlugin,
	Output
} from 'webpack'
import { join } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const rootPath = '../src/client'
const outputPath = join(__dirname, '../dist/')
const publicPath = '/'

// html plugin
export const htmlPlugin = new HtmlWebpackPlugin({
	template: join(__dirname, rootPath, 'index.html'),
	filename: 'index.html',
	inject: 'body'
})

type WebpackEnv = {
	HOST_PORT?: number
}

export default (env?: WebpackEnv): Configuration => {
	const hostPort = env != null ? env.HOST_PORT : 9080

	const config: Configuration = {
		context: join(__dirname, rootPath),
		devtool: 'eval',
		devServer: {
			historyApiFallback: true,
			hot: true,
			contentBase: './dist'
		},
		entry: {
			app: [
				'babel-polyfill',
				'react-hot-loader/patch',
				`webpack-dev-server/client?http://localhost:${hostPort}`,
				'webpack/hot/only-dev-server',
				'./index.tsx'
			]
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
					test: /\.(eot|svg|ttf|woff|woff2)$/i,
					exclude: /node_modules/,
					loader: 'file-loader'
				},
				{
					test: /\.(sass|scss|css)$/,
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
								sourceMap: true
							}
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
					test: /\.graphql?$/,
					use: [
						{
							loader: 'webpack-graphql-loader',
							options: {
								// validate: true,
								// schema: "./path/to/schema.json",
								// removeUnusedFragments: true
								// etc. See "Loader Options" below
							}
						}
					]
				},
				{
					test: /\.ts(x?)$/,
					exclude: [/node_modules/],
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: [['env', { modules: false }], 'react'],
								plugins: [
									'transform-class-properties',
									'transform-decorators-legacy',
									'transform-object-rest-spread',
									'react-hot-loader/babel'
								],
								babelrc: false
							}
						},
						{
							loader: 'ts-loader',
							options: {
								compilerOptions: {
									sourceMap: true,
									jsx: 'preserve',
									allowSyntheticDefaultImports: true,
									esModuleInterop: true
								}
							}
						}
					]
				}
			]
		},
		plugins: [
			new EnvironmentPlugin({
				NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined,
				DEBUG: true
			}),
			new HtmlWebpackPlugin({
				template: join(__dirname, rootPath, 'index.html'),
				filename: 'index.html',
				inject: 'body'
			}),
			new HotModuleReplacementPlugin(),
			new NamedModulesPlugin(),
			new NoEmitOnErrorsPlugin()
		],
		resolve: {
			extensions: ['.jsx', '.js', '.ts', '.tsx'],
			alias: {}
		}
	}

	return config
}
