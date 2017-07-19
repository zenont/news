import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { DetailLayout } from '../../components'

export class DetailContainer extends Component {
	render() {
		const { articles } = this.props
		return (
			<div>
				DetailContainer
				<DetailLayout article={articles[0]}>

				</DetailLayout>
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

const mapStateToProps = (store) => {
	const { article } = store

	return {
		articles: article.get('articles').toJS()
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailContainer))
