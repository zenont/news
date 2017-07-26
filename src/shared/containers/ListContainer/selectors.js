import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { createSelector } from 'reselect'
import { requestArticles } from '../../store/article/actions'
import { requestSources } from '../../store/source/actions'

const selector = createSelector(
	store => store.article.get('articles').toArray(),
	store => store.source.get('sources').toArray(),
	(articles, sources) => {
		const categories = [...new Set(sources.map(source => source.category))]
			.map(category => ({
				category,
				sources: sources.filter(source => source.category === category)
			}))

		return {
			articles,
			sources,
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
		}
	}
}

export default (component) => withRouter(connect(mapStateToProps, mapDispatchToProps)(component))
