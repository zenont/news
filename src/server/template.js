import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { renderToString } from 'react-dom/server'

const DOCTYPE = `<!DOCTYPE html>\n`

class IndexHtml extends Component {
	displayName = 'IndexHtml'
	propTypes = {
		title: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired
	}
	// window.__APP_INITIAL_STATE__ = ${initialState}
	render() {
		const { title, body } = this.props
		return (
			<html>
				<head>
					<script></script>
					<title>${title}</title>
					<link rel="stylesheet" href="/assets/index.css" />
				</head>
				<body>
					<div id="root">${body}</div>
				</body>
				<script src="/assets/bundle.js"></script>
			</html>
		)
	}
}

const stringifiedIndexHtml = renderToString(<IndexHtml />)
const template = `${DOCTYPE}${stringifiedIndexHtml}`

export const templateUp = ({ body, title, initialState }) => {
	return `
	<!DOCTYPE html>
		<html>
			<head>
				<script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
				<title>${title}</title>
				<link rel="stylesheet" href="/assets/index.css" />
			</head>
			<body>
				<div id="root">${body}</div>
			</body>
			<script src="/assets/bundle.js"></script>
		</html>
`
}

export default template
