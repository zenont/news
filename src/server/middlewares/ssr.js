import React from 'react'
import { Page } from '../components'
import RootContainer from '../../shared/containers'
import store from '../../shared/store'
import { renderToStaticMarkup } from 'react-dom/server'

const middleware = (options = {}) => {
	const { redirectCode = 302 } = options

	return (request, response, next) => {
		const context = {}
		const stringifiedHtml = renderToStaticMarkup(
			<Page>
				<RootContainer
					server
					store={store}
					context={context}
					location={request.url}
				/>
			</Page>
		)

		if (context.url) {
			response.writeHead(redirectCode, {
				Location: context.url
			})
			response.end()
		} else {
			response.send(stringifiedHtml)
		}
	}
}

export default middleware
