import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { ListLayout } from '../../components'
import * as articleActions from '../../store/news/actions'

export class ListContainer extends Component {
	componentDidMount() {
		const { articleActions } = this.props
		articleActions.requestSourceOptions()
	}

	handleOnSourceChanged(source) {
		const { articleActions } = this.props
		articleActions.selectSourceOption(source)
		articleActions.requestArticles(source)
	}

	render() {
		const { articles, sourceOptions, selectedSource } = this.props
		return (
			<div>
				List Coontainer
				<ListLayout
					articles={articles}
					sources={sourceOptions}
					selectedSource={selectedSource}
					onSourceChanged={(source) => this.handleOnSourceChanged(source)}
				/>
			</div>
		)
	}
}

ListContainer.displayName = 'ListContainer'
ListContainer.propTypes = {
	articles: PropTypes.array.isRequired,
	articleActions: PropTypes.object.isRequired,
	sourceOptions: PropTypes.array.isRequired,
	selectedSource: PropTypes.string.isRequired
}
ListContainer.defaultProps = {
	articles: [],
	sourceOptions: []
}

const mapStateToProps = (store) => {
	const { news } = store
	return {
		articles: news.get('articles').toJS(),
		sourceOptions: news.getIn(['sources', 'options']).toJS(),
		selectedSource: news.getIn(['sources', 'selected']),
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		articleActions: bindActionCreators(articleActions, dispatch)
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListContainer))
