import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AppLayout } from '../../components'

export class AppContainer extends Component {
	render() {
		const { children } = this.props

		return (
			<AppLayout>
				{children}
			</AppLayout>
		)
	}
}

AppContainer.displayName = 'AppContainer'
AppContainer.propTypes = {
	children: PropTypes.node.isRequired,
}
AppContainer.defaultProps = {
}

export default AppContainer
