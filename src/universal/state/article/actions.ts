import { Action } from 'redux'
import { Article, Category, Country, Keywords, Language, SortBy } from '../../model'

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

export class EverythingRequest {
	public readonly keywords?: Keywords
	public readonly sources?: ReadonlyArray<string>
	public readonly domains?: ReadonlyArray<string>
	public readonly from?: Date
	public readonly to?: Date
	public readonly language?: Language
	public readonly sortBy?: SortBy
	public readonly pageSize?: number
	public readonly page?: number
}

export type ReduxType<T extends string> = { readonly type: T }
export type ActionType<T extends string, K = {}> = ReduxType<T> & Readonly<K>

export const createAction = <T extends string, K = {}>(payload?: K): ActionType<T, K> => ({
	...payload as any
})

export type ArticleTopHeadlinesRequestAction = ActionType<ArticleActions.requestTopHeadlines, TopHeadlinesRequest>
export type ArticleCancelAction = ActionType<ArticleActions.cancel>

/*
export class ArticleTopHeadlinesRequestAction implements IArticleTopHeadlinesRequestAction {
	public readonly type = ArticleActions.requestTopHeadlines
}

export class ArticleEverythingRequestAction extends EverythingRequest implements Action {
	public readonly type = ArticleActions.requestEverything
}

export class ArticleFulfillAction implements Action {
	public readonly type = ArticleActions.fulfill
	constructor(
		public readonly articles: ReadonlyArray<Article>,
		public readonly total: number) { }
}

export class ArticleRejectAction implements Action {
	public readonly type = ArticleActions.reject
	constructor(public readonly error?: string | Error | null) { }
}

export class ArticleCancelAction implements Action {
	public readonly type = ArticleActions.cancel
}
*/

export type ArticleAction =
	/*ArticleTopHeadlinesRequestAction |
	ArticleEverythingRequestAction |
	ArticleFulfillAction |
	ArticleRejectAction |
	ArticleCancelAction*/
	ArticleTopHeadlinesRequestAction | ArticleCancelAction
