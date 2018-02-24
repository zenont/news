import 'rxjs/add/operator/map'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs'
import { Url } from '../../common'
import { ArticleResponse, EverythingRequestType, ResponseError, config } from '../common'

export function fetchEverything(request: EverythingRequestType): Observable<ArticleResponse | ResponseError> {
	const { apiKey, apiUrl } = config
	const { country,  } = request
	const url = Url.of(apiUrl)
		.route('top-headlines')
		.query({ sources, apiKey })
		.stringify()

	return ajax.getJSON<ArticleResponse>(url).retry(1)
}
