import { Dispatch } from 'redux'
import { Selector, createSelector } from 'reselect'
import { IListContainerDispatchProps, IListContainerStateProps } from './types'
import { RootState, cancelArticles, requestTopHeadlines } from '../../state'
import { Country } from '../../model'

const articlesSelector = (store: RootState) => store.article.articles

const getArticles = createSelector(
	articlesSelector,
	articles => articles
)

export const mapDispatchToProps = (dispatch: Dispatch<RootState>): IListContainerDispatchProps => ({
	onLoad: (country: Country) => {
		dispatch(requestTopHeadlines({ country }))
	},
	onUnload: () => {
		dispatch(cancelArticles())
	},
})
