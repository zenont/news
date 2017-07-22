import React from 'react'
import PropTypes from 'prop-types'

export const ListLayout = ({ children }) =>
	<div>
		{children}
	</div>

ListLayout.displayName = 'ListLayout'
ListLayout.propTypes = {
	children: PropTypes.node.isRequired,
}
ListLayout.defaultProps = {
}

export default ListLayout
