import { Article } from '../../model'
import * as actions from './actions'

export const requestTopHeadlines = (request?: actions.TopHeadlinesRequest): actions.ArticleTopHeadlinesRequestAction => ({
	...new actions.ArticleTopHeadlinesRequestAction(),
	...request
})

export const requestArticles = (request?: actions.EverythingRequest): actions.ArticleEverythingRequestAction => ({
	...new actions.ArticleEverythingRequestAction(),
	...request
})

export const fulfillArticles = (articles: Article[], total: number): actions.ArticleFulfillAction =>
	new actions.ArticleFulfillAction(articles, total)

export const rejectArticles = (error?: string | Error | null): actions.ArticleRejectAction =>
	new actions.ArticleRejectAction(error)

export const cancelArticles = (): actions.ArticleCancelAction =>
	new actions.ArticleCancelAction()
