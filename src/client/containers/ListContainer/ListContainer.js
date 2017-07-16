import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ListContainer extends Component {
	render() {
		return (
			<div>
				List Coontainer
			</div>
		)
	}
}

ListContainer.displayName = 'ListContainer'
ListContainer.propTypes = {
	articles: PropTypes.array.isRequired,
}
ListContainer.defaultProps = {
	articles: []
}

export default ListContainer
