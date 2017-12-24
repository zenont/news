import { Article, Source } from '../../../model'

export enum ResponseStatuses {
	ok = 'ok',
	error = 'error'
}

export type ResponseStatusType = {
	status: ResponseStatuses
}

export type ResponseCodeType = {
	code: string
}

export type ResponseMessageType = {
	message: string
}

export type ResponseErrorType = ResponseStatusType & ResponseCodeType & ResponseMessageType

export type ArticleResponseType = ResponseStatusType & {
	totalResults: number,
	articles: Article[]
}
