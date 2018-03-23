import { Article } from '../../model'
import {
	ArticleActions,
	ArticleCancelAction,
	ArticleTopHeadlinesRequestAction,
	TopHeadlinesRequest,
	createAction
} from './actions'
/*
export const requestTopHeadlines = (request?: actions.TopHeadlinesRequest): actions.IArticleTopHeadlinesRequestAction => ({
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
	*/
export const requestTopHeadlines = (request?: TopHeadlinesRequest): ArticleTopHeadlinesRequestAction =>
	createAction<ArticleActions.requestTopHeadlines>(request)

export const cancelArticles = (): ArticleCancelAction =>
	createAction<ArticleActions.cancel>()
