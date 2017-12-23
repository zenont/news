import { Action } from 'redux'
import { ArticleActionTypes } from './types'
import { Article } from '../../model'

export interface IArticleRequestAction extends Action {
	readonly type: ArticleActionTypes.request
}

export interface IRequestFulfillAction extends Action {
	readonly type: ArticleActionTypes.fulfill
	readonly articles: Article[]
}

export interface IArticleRejectAction extends Action {
	readonly type: ArticleActionTypes.reject
	readonly error: string | Error
}

export interface IArticleCancelAction extends Action {
	readonly type: ArticleActionTypes.cancel
}

export type ArticleActionTypes =
	IArticleRequestAction |
	IRequestFulfillAction |
	IArticleRejectAction |
	IArticleCancelAction
