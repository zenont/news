import 'rxjs/add/operator/map'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs'
import { Url } from '../../common'
import { ArticleResponseType, EverythingRequestType, ResponseErrorType, config } from '../common'

export function fetchEverything(request: EverythingRequestType): Observable<ArticleResponseType | ResponseErrorType> {
	const { apiKey, apiUrl } = config
	const { country,  } = request
	const url = Url.of(apiUrl)
		.route('top-headlines')
		.query({ sources, apiKey })
		.stringify()

	return ajax.getJSON<ArticleResponseType>(url).retry(1)
}
