import { ArticleActions } from './types'
import { Article } from '../../model'
import * as at from './actions'

export const requestArticles = (): at.IArticleRequestAction => ({
	type: ArticleActions.request
})

export const fulfillArticles = (articles: Article[]): at.IArticleFulfillAction => ({
	type: ArticleActions.fulfill,
	articles
})

export const rejectArticles = (error: string | Error | any): at.IArticleRejectAction => ({
	type: ArticleActions.reject,
	error
})

export const cancelArticles = (): at.IArticleCancelAction => ({
	type: ArticleActions.cancel
})
