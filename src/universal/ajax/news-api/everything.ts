import 'rxjs/add/operator/map'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs'
import { stringify } from 'query-string'
import urlJoin from 'url-join'
import { config } from './config'
import { EverythingRequest } from './request'
import { ArticleResponse, ErrorResponse } from './response'

export function fetchEverything(request: EverythingRequest): Observable<ArticleResponse | ErrorResponse> {
	const { apiKey, apiUrl } = config
	const query = stringify({
		...request,
		apiKey
	})
	const url = `${urljoin(apiUrl, 'everything')}?${query}`
	return ajax.getJSON<ArticleResponse>(url)
}
