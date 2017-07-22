import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { createSelector } from 'reselect'
import { requestSourceOptions, selectSourceOption, requestArticles } from '../../store/news/actions'

const selector = createSelector(
	store => store.news.get('articles').toArray(),
	store => store.news.getIn(['sources', 'options']).toArray(),
	store => store.news.getIn(['sources', 'selected']),
	(articles, sourceOptions, selectedSource) => {
		return {
			articles,
			sourceOptions,
			selectedSource
		}
	}
)

export const mapStateToProps = (store) => {
	return selector(store)
}

export const mapDispatchToProps = (dispatch) => {
	return {
		onLoad: () => {
			dispatch(requestSourceOptions())
			dispatch(requestArticles())
		},
		onSourceChanged: (source) => {
			dispatch(selectSourceOption(source))
			dispatch(requestArticles(source))
		}
	}
}

export default (component) => withRouter(connect(mapStateToProps, mapDispatchToProps)(component))
