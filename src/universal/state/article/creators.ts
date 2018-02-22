import { Article } from '../../model'
import { ArticleTopHeadlinesRequestAction, TopHeadlinesRequest } from './actions'

export const requestTopHeadlines = (request: TopHeadlinesRequest): ArticleTopHeadlinesRequestAction => ({
	...new ArticleTopHeadlinesRequestAction(),
	...request
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
