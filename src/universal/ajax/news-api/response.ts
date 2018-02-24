import { Article, Source } from '../../model'

export enum ResponseStatuses {
	ok = 'ok',
	error = 'error'
}

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

export type ArticleResponse = ResponseStatus & {
	readonly totalResults: number,
	readonly articles: Article[]
}

export type SourcesResponse = ResponseStatus & {
	readonly totalResults: number,
	readonly sources: Source[]
}

const isArticleResponse = (response: ArticleResponse | ErrorResponse): response is ArticleResponse =>
	(response as ArticleResponse).articles !== undefined

const isSourcesResponse = (response: SourcesResponse | ErrorResponse): response is SourcesResponse =>
	(response as SourcesResponse).sources !== undefined

const isErrorResponse = (response: any): response is ErrorResponse =>
	(response as ErrorResponse).message !== undefined &&
	(response as ErrorResponse).code !== undefined &&
	(response as ErrorResponse).status !== undefined

