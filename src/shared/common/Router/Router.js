import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, StaticRouter } from 'react-router-dom'

export const Router = ({ server, children, context, location }) => {
	if (server === true) {
		return (
			<StaticRouter context={context} location={location}>
				<div>
					{children}
				</div>
			</StaticRouter>
		)
	} else {
		return (
			<BrowserRouter>
				<div>
					{children}
				</div>
			</BrowserRouter>
		)
	}
}

Router.displayName = 'Router'
Router.propTypes = {
	children: PropTypes.node.isRequired,
	server: PropTypes.bool.isRequired,
	location: PropTypes.string,
	context: PropTypes.object
}
Router.defaultProps = {
	server: false
}

export default Router
