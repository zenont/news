import React from 'react'
import PropTypes from 'prop-types'

export const AppLayout = ({ children }) =>
	<div>
		{children}
	</div>

AppLayout.displayName = 'AppLayout'
AppLayout.propTypes = {
	children: PropTypes.node.isRequired,
}
AppLayout.defaultProps = {
}

export default AppLayout
