import 'rxjs/add/operator/map'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs'
import { Url } from '../../common'
import { ArticleResponse, ResponseError, config } from '../common'

export function fetchTopHeadlines(...source: string[]): Observable<ArticleResponse | ResponseError> {
	const { apiKey, apiUrl } = config
	const sources = source.join(',')
	const url = Url.of(apiUrl)
		.route('top-headlines')
		.query({ sources, apiKey })
		.stringify()

	return ajax.getJSON<ArticleResponse>(url).
		retry(1)
}
