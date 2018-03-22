import React, { ReactNode, StatelessComponent } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, BrowserRouterProps, HashRouterProps, RouteComponentProps, StaticRouter } from 'react-router-dom'

export interface IRouterProps {
	readonly server: boolean
	readonly context: any
	readonly location: string
	readonly children?: ReactNode
}

export const Router: StatelessComponent<IRouterProps> = ({ server, children, context, location }) => {
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
	children: PropTypes.node,
	server: PropTypes.bool.isRequired,
	location: PropTypes.string,
	context: PropTypes.object
}
Router.defaultProps = {
	server: false
}

export default Router
