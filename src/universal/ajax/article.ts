import 'rxjs/add/operator/map'
import { ajax } from 'rxjs/observable/dom/ajax'
import { AjaxResponse, Observable } from 'rxjs'
import { PayloadErrorType, PayloadType } from './payload'
import { Url } from './url'
import config from './config'
import { Article, Source } from '../model'

export type ArticlePayload = PayloadType & {
	totalResults: number,
	articles: Article[]
}

export function fetchTopArticles(...source: string[]): Observable<ArticlePayload | PayloadErrorType> {
	const { apiKey, apiUrl } = config
	const sources = source.join(',')
	const url = Url.of(apiUrl)
		.route('top-headlines')
		.query({ sources, apiKey })
		.stringify()

	return ajax.getJSON<ArticlePayload>(url)
}
