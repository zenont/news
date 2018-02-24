import 'rxjs/add/operator/map'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs'
import { stringify } from 'query-string'
import urlJoin from 'url-join'
import { ArticleResponse, ErrorResponse, TopHeadlinesRequest, config } from '../common'

export function fetchTopHeadlines(request: TopHeadlinesRequest): Observable<ArticleResponse | ErrorResponse> {
	const { apiKey, apiUrl } = config
	const query = stringify({
		...request,
		apiKey
	})

	const url = `${urljoin(apiUrl, 'top-headlines')}?${query}`
	return ajax.getJSON<ArticleResponse>(url).
		retry(1)
}
