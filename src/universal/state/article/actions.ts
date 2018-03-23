import { Action } from 'redux'
import { Article, Category, Country, Keywords, Language, SortBy, UnhandledError } from '../../model'

export enum ArticleActions {
	requestTopHeadlines = 'ARTICLES/REQUEST_TOP_HEADLINES',
	requestEverything = 'ARTICLES/REQUEST_EVERYTHING',
	fulfill = 'ARTICLES/FULFILL',
	reject = 'ARTICLES/REJECT',
	cancel = 'ARTICLES/CANCEL',
}

export type TopHeadlinesRequest = {
	readonly country?: Country
	readonly category?: Category
	readonly sources?: ReadonlyArray<string>
	readonly pageSize?: number
	readonly page?: number
}

export type ArticleFulfillPayload = {
	readonly articles: ReadonlyArray<Article>
	readonly total: number
}

export type ArticleRejectPayload = {
	readonly error?: UnhandledError
}

export type ReduxType<T extends string> = { readonly type: T }
export type ActionType<T extends string, K = {}> = ReduxType<T> & Readonly<K>

export const createAction = <T extends string, K = {}>(type: T, payload?: K): ActionType<T, K> => ({
	type,
	...payload as any
})

export type ArticleTopHeadlinesRequestAction = ActionType<ArticleActions.requestTopHeadlines, TopHeadlinesRequest>
export type ArticleCancelAction = ActionType<ArticleActions.cancel>
export type ArticleFulfillAction = ActionType<ArticleActions.fulfill, ArticleFulfillPayload>
export type ArticleRejectAction = ActionType<ArticleActions.reject, ArticleRejectPayload>

export type ArticleAction =
	ArticleTopHeadlinesRequestAction |
	ArticleFulfillAction |
	ArticleRejectAction |
	ArticleCancelAction

