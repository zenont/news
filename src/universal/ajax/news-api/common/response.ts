import { Article, Source } from '../../../model'

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

export type ResponseError = ResponseStatus & ResponseCode & ResponseMessage

export type ArticleResponse = ResponseStatus & {
	readonly totalResults: number,
	readonly articles: Article[]
}
