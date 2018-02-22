import { Action } from 'redux'
import { Article } from '../../model'

export enum ArticleActions {
	requestTopHeadlines = 'ARTICLES/REQUEST_TOP_HEADLINES',
	requestEverything = 'ARTICLES/REQUEST_EVERYTHING',
	fulfill = 'ARTICLES/FULFILL',
	reject = 'ARTICLES/REJECT',
	cancel = 'ARTICLES/CANCEL',
}

export type Language =
	'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it' | 'nl' | 'no' | 'pt' | 'ru' | 'se' | 'ud' | 'zh'

export type SortBy =
	'relevancy' | 'popularity' | 'publishedAt'

export type Category =
	'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology'

export type Country =
	'ae' | 'ar' | 'at' | 'au' | 'be' | 'bg' | 'br' | 'ca' | 'ch' | 'cn' | 'de' | 'eg' | 'fr' | 'gb' | 'ru' | 'us'

export type Keywords = {
	exact?: ReadonlyArray<string>
	must?: ReadonlyArray<string>
	not?: ReadonlyArray<string>
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

export class ArticleEverythingRequestAction implements Action {
	public readonly type = ArticleActions.requestEverything
}

export class IArticleFulfillAction implements Action {
	public readonly type = ArticleActions.fulfill
	constructor(
		public readonly articles: ReadonlyArray<Article>,
		public readonly total: number) { }
}

export class IArticleRejectAction implements Action {
	public readonly type = ArticleActions.reject
	constructor(public readonly error?: string | Error | null) { }
}

export class IArticleCancelAction implements Action {
	public readonly type = ArticleActions.cancel
}

export type ArticleAction =
	ArticleTopHeadlinesRequestAction |
	IArticleFulfillAction |
	IArticleRejectAction |
	IArticleCancelAction
