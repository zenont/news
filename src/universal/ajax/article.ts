import 'rxjs/add/operator/map'
import { ajax } from 'rxjs/observable/dom/ajax'
import { AjaxResponse, Observable } from 'rxjs'
import { PayloadErrorType, StatusType } from './payload'
import { Url } from './url'
import config from './config'
import { Article, Source } from '../model'

type PayloadType = {
	totalResults: number,
	articles: Article[]
}

export type ArticlePayloadType = StatusType & PayloadType

export function fetchTopArticles(...source: string[]): Observable<ArticlePayloadType | PayloadErrorType> {
	const { apiKey, apiUrl } = config
	const sources = source.join(',')
	const url = Url.of(apiUrl)
		.route('top-headlines')
		.query({ sources, apiKey })
		.stringify()

	return ajax.getJSON<ArticlePayloadType>(url).retry(1)
}
