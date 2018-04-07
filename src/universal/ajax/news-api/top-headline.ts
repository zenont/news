import 'rxjs/add/operator/map'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs'
import { stringify } from 'query-string'
import urljoin from 'url-join'
import { config } from './config'
import { TopHeadlinesRequest } from './request'
import { IAjaxArticleResponse, IAjaxErrorResponse } from './response'

export function fetchTopHeadlines(request: TopHeadlinesRequest): Observable<IAjaxArticleResponse | IAjaxErrorResponse> {
	const { apiKey, apiUrl } = config
	const query = stringify({
		...request,
		apiKey
	})

	const url = `${urljoin(apiUrl, 'top-headlines')}?${query}`
	return ajax({
		url,
		crossDomain: true,
		method: 'GET',
	})
}
