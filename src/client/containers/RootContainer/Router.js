import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, StaticRouter } from 'react-router-dom'

export const Router = ({ server, children }) => {
	if (server === true) {
		return (
			<StaticRouter>
				{children}
			</StaticRouter>
		)
	} else {
		return (
			<BrowserRouter>
				{children}
			</BrowserRouter>
		)
	}
}

Router.displayName = 'Router'
Router.propTypes = {
	children: PropTypes.node.isRequired,
	server: PropTypes.bool.isRequired
}
Router.defaultProps = {
	server: false
}

export default Router
