import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Routes, Router } from '../../common'

const RootContainer = ({ store, server, context, location }) => (
	<Provider store={store}>
		<Router server={server} context={context} location={location}>
			<Routes />
		</Router>
	</Provider>
)

RootContainer.displayName = 'RootContainer'
RootContainer.propTypes = {
	store: PropTypes.object.isRequired,
	server: PropTypes.bool.isRequired,
	location: PropTypes.string,
	context: PropTypes.object
}
RootContainer.defaultProps = {
	server: false
}

export default RootContainer
