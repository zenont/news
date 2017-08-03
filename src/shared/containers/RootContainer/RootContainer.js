import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Routes, Router } from '../../common'
import AppContainer from '../AppContainer'

const RootContainer = ({ store, server, context, location }) => (
	<Provider store={store}>
		<Router server={server} context={context} location={location}>
			<AppContainer>
				<Routes />
			</AppContainer>
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
