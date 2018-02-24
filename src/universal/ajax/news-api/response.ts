import { AjaxResponse } from 'rxjs'
import { Article, Source } from '../../model'

export type ResponseStatuses = 'ok' | 'error'

export type ResponseStatus = {
	readonly status: ResponseStatuses
}

export type ResponseCode = {
	readonly code: string
}

export type ResponseMessage = {
	readonly message: string
}

export type ErrorResponse = ResponseStatus & ResponseCode & ResponseMessage

export interface IAjaxErrorResponse extends AjaxResponse {
	readonly response: ErrorResponse
}

export type ArticleResponse = ResponseStatus & {
	readonly totalResults: number,
	readonly articles: Article[]
}

export interface IAjaxArticleResponse extends AjaxResponse {
	readonly response: ArticleResponse
}

export type SourcesResponse = ResponseStatus & {
	readonly totalResults: number,
	readonly sources: Source[]
}

export interface IAjaxSourceResponse extends AjaxResponse {
	readonly response: SourcesResponse
}

export const isArticleResponse = (ajaxResponse: AjaxResponse): ajaxResponse is IAjaxArticleResponse =>
	(ajaxResponse as IAjaxArticleResponse).response !== undefined &&
	(ajaxResponse as IAjaxArticleResponse).response.articles !== undefined &&
	(ajaxResponse as IAjaxArticleResponse).response.status !== undefined &&
	(ajaxResponse as IAjaxArticleResponse).response.status === 'ok'

export const isSourcesResponse = (ajaxResponse: AjaxResponse): ajaxResponse is IAjaxSourceResponse =>
	(ajaxResponse as IAjaxSourceResponse).response !== undefined &&
	(ajaxResponse as IAjaxSourceResponse).response.sources !== undefined &&
	(ajaxResponse as IAjaxSourceResponse).response.status !== undefined &&
	(ajaxResponse as IAjaxSourceResponse).response.status === 'ok'

export const isErrorResponse = (ajaxResponse: AjaxResponse): ajaxResponse is IAjaxErrorResponse =>
	(ajaxResponse as IAjaxErrorResponse).response !== undefined &&
	(ajaxResponse as IAjaxErrorResponse).response.code !== undefined &&
	(ajaxResponse as IAjaxErrorResponse).response.message !== undefined &&
	(ajaxResponse as IAjaxErrorResponse).response.status !== undefined &&
	(ajaxResponse as IAjaxErrorResponse).response.status === 'error'

