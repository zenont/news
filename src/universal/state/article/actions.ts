import { Action } from 'redux'
import { ArticleActions } from './types'
import { Article } from '../../model'

export interface IArticleRequestAction extends Action {
	readonly type: ArticleActions.request
}

export interface IArticleFulfillAction extends Action {
	readonly type: ArticleActions.fulfill
	readonly articles: Article[]
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
	IArticleFulfillAction |
	IArticleRejectAction |
	IArticleCancelAction
