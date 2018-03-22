import { Action } from 'redux'
import { Article, Category, Country, Keywords, Language, SortBy } from '../../model'

export enum ArticleActions {
	requestTopHeadlines = 'ARTICLES/REQUEST_TOP_HEADLINES',
	requestEverything = 'ARTICLES/REQUEST_EVERYTHING',
	fulfill = 'ARTICLES/FULFILL',
	reject = 'ARTICLES/REJECT',
	cancel = 'ARTICLES/CANCEL',
}

export class TopHeadlinesRequest {
	public readonly country?: Country
	public readonly category?: Category
	public readonly sources?: ReadonlyArray<string>
	public readonly pageSize?: number
	public readonly page?: number
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

export class ArticleTopHeadlinesRequestAction extends TopHeadlinesRequest implements Action {
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

export type ArticleAction =
	ArticleTopHeadlinesRequestAction |
	ArticleEverythingRequestAction |
	ArticleFulfillAction |
	ArticleRejectAction |
	ArticleCancelAction
