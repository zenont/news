import { Dispatch } from 'redux'
import { Selector, createSelector } from 'reselect'
import { IListContainerDispatchProps, IListContainerStateProps } from './types'
import { RootState, cancelArticles, requestTopHeadlines } from '../../state'

const articlesSelector = (store: RootState) => store.article.articles

const getArticles = createSelector(
	articlesSelector,
	articles => articles
)

export const mapStateToProps = (store: RootState): IListContainerStateProps => ({
	articles: getArticles(store),
	fetched: store.article.fetched,
	fetching: store.article.fetching,
})

export const mapDispatchToProps = (dispatch: Dispatch<RootState>): IListContainerDispatchProps => ({
	onLoad: () => {
		dispatch(requestTopHeadlines({}))
	},
	onUnload: () => {
		dispatch(cancelArticles())
	},
})
