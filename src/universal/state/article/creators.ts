import { Article } from '../../model'
import {
	ArticleActions,
	ArticleCancelAction,
	ArticleFulfillAction,
	ArticleFulfillPayload,
	ArticleRejectAction,
	ArticleRejectPayload,
	ArticleTopHeadlinesRequestAction,
	TopHeadlinesRequest,
	createAction
} from './actions'

export const requestTopHeadlines = (payload: TopHeadlinesRequest): ArticleTopHeadlinesRequestAction =>
	createAction(ArticleActions.requestTopHeadlines, payload)

export const fulfillArticles = (payload: ArticleFulfillPayload): ArticleFulfillAction =>
	createAction(ArticleActions.fulfill, payload)

export const rejectArticles = (payload: ArticleRejectPayload): ArticleRejectAction =>
	createAction(ArticleActions.reject, payload)

export const cancelArticles = (): ArticleCancelAction =>
	createAction(ArticleActions.cancel)
