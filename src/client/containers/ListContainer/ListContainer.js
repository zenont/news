import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { ListLayout } from '../../components'

export class ListContainer extends Component {
	render() {
		const { articles } = this.props
		return (
			<div>
				List Coontainer
				<ListLayout articles={articles} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListContainer))
