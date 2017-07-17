import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Routes, Router } from '../../common'

export const RootContainer = ({ store, server }) => (
	<Provider store={store}>
		<Router server={server}>
			{Routes}
		</Router>
	</Provider>
)

RootContainer.displayName = 'RootContainer'
RootContainer.propTypes = {
	store: PropTypes.object.isRequired,
	server: PropTypes.bool.isRequired
}
RootContainer.defaultProps = {
	server: false
}

export default RootContainer
