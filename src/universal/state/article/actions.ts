import { Action } from 'redux'
import { ArticleActions } from './types'
import { Article } from '../../model'

export interface IArticleRequestAction extends Action {
	readonly type: ArticleActions.request
}

export interface IArticleRequestTopHeadlinesAction extends Action {
	readonly type: ArticleActions.requestTopHeadlines
}

export interface IArticleFulfillAction extends Action {
	readonly type: ArticleActions.fulfill
	readonly articles: Article[]
	readonly total: number
}

export interface IArticleRejectAction extends Action {
	readonly type: ArticleActions.reject
	readonly error: string | Error
}

export interface IArticleCancelAction extends Action {
	readonly type: ArticleActions.cancel
}

export type ArticleActionTypes =
	IArticleRequestAction |
	IArticleRequestTopHeadlinesAction |
	IArticleFulfillAction |
	IArticleRejectAction |
	IArticleCancelAction
