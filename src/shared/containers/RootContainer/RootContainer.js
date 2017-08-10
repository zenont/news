import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Routes, Router } from '../../common'
import AppContainer from '../AppContainer'

const RootContainer = ({ store, server, context, url }) => (
	<Provider store={store}>
		<Router server={server} context={context} location={url}>
			<AppContainer>
				<Routes url={url} />
			</AppContainer>
		</Router>
	</Provider>
)

RootContainer.displayName = 'RootContainer'
RootContainer.propTypes = {
	store: PropTypes.object.isRequired,
	server: PropTypes.bool.isRequired,
	url: PropTypes.string,
	context: PropTypes.object
}
RootContainer.defaultProps = {
	server: false
}

export default RootContainer
