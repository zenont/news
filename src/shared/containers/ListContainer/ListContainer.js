import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { ListLayout } from '../../components'
import * as articleActions from '../../actions'

export class ListContainer extends Component {
	componentDidMount() {
		const { articleActions } = this.props
		articleActions.fetchSourceOptionsAsync()
	}

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
	articleActions: PropTypes.object.isRequired,
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
		articleActions: bindActionCreators(articleActions, dispatch)
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListContainer))
