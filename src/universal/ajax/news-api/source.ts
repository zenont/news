import 'rxjs/add/operator/map'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs'
import { stringify } from 'query-string'
import urlJoin from 'url-join'
import { config } from './config'
import { TopHeadlinesRequest } from './request'
import { IAjaxErrorResponse, IAjaxSourceResponse } from './response'

export function fetchSources(request: TopHeadlinesRequest): Observable<IAjaxSourceResponse | IAjaxErrorResponse> {
	const { apiKey, apiUrl } = config
	const query = stringify({
		...request,
		apiKey
	})

	const url = `${urljoin(apiUrl, 'sources')}?${query}`
	return ajax.getJSON<IAjaxSourceResponse | IAjaxErrorResponse>(url)
}
