import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { createSelector } from 'reselect'
import { requestArticles } from '../../store/article/actions'
import { requestSources } from '../../store/category/actions'

const selector = createSelector(
	store => store.article.get('articles').toArray(),
	store => store.category.get('categories').toArray(),
	(articles, categories) => {
		return {
			articles,
			categories,
		}
	}
)

export const mapStateToProps = (store) => {
	return selector(store)
}

export const mapDispatchToProps = (dispatch) => {
	return {
		onLoad: () => {
			dispatch(requestSources())
			dispatch(requestArticles())
		},
		onSourceChanged: (source) => {
			dispatch(selectSourceOption(source))
			dispatch(requestArticles(source))
		}
	}
}

export default (component) => withRouter(connect(mapStateToProps, mapDispatchToProps)(component))
