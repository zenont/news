import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

export class DetailContainer extends Component {
	render() {
		return (
			<div>
				DetailContainer
			</div>
		)
	}
}

DetailContainer.displayName = 'DetailContainer'
DetailContainer.propTypes = {
	article: PropTypes.object,
}
DetailContainer.defaultProps = {
	article: null
}

export default withRouter(DetailContainer)
