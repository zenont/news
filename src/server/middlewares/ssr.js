import { Page } from './components'
import RootContainer from '../shared/containers'
import store from '../shared/store'
import { renderToStaticMarkup } from 'react-dom/server'

const middleware = options => {
	const { redirectCode = 302 } = options;

	return (request, response, next) => {
		const context = {}
		const stringifiedHtml = renderToStaticMarkup(
			<Page>
				<RootContainer
					server
					store={store}
					context={context}
					location={req.url}
				/>
			</Page>
		)

		if (context.url) {
			res.writeHead(redirectCode, {
				Location: context.url
			})
			res.end()
		} else {
			res.send(stringifiedHtml)
		}
	}
}


app.get('*', (req, res) => {
	/*fs.readFile(path.join('./', assetsPath, 'index.html'), 'utf8', (err, data) => {
		console.log('assetsPath', assetsPath)
		if (err) {
			return console.log(err)
		}

		console.log(data)
	})*/

	console.log('requesting on', req.url, req.params, req.query)
	const context = {}
	const stringifiedHtml = renderToStaticMarkup(
		<Page>
			<RootContainer
				server
				store={store}
				context={context}
				location={req.url}
			/>
		</Page>
	)
	res.send(stringifiedHtml)
})

export default
