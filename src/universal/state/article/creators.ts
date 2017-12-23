import { ArticleActions } from './types'
import { Article } from '../../model'
import * as actions from './actions'

export const requestArticles = (): actions.IArticleRequestAction => ({
	type: ArticleActions.request
})

export const requestTopHeadlines = (): actions.IArticleRequestTopHeadlinesAction => ({
	type: ArticleActions.requestTopHeadlines
})

export const fulfillArticles = (articles: Article[], total: number): actions.IArticleFulfillAction => ({
	type: ArticleActions.fulfill,
	articles,
	total
})

export const rejectArticles = (error: string | Error | any): actions.IArticleRejectAction => ({
	type: ArticleActions.reject,
	error
})

export const cancelArticles = (): actions.IArticleCancelAction => ({
	type: ArticleActions.cancel
})
