import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

export class List extends Component {
	render() {
		return (
			<div>
				List Coontainer
			</div>
		)
	}
}

List.displayName = 'List'
List.propTypes = {
	articles: PropTypes.array.isRequired,
}
List.defaultProps = {
	articles: []
}

export default withRouter(List)
