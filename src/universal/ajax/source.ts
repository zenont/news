import { AjaxResponse, Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import { ajax } from 'rxjs/observable/dom/ajax'
import { PayloadType } from './payload'
import { Source } from '../model'

export type SourcePayload = PayloadType & {
	sources: Source[]
}

// language=en&country=us&apiKey=9ed8490dae88488d98020bd516cbfe47
export function fetchSources(language: string = 'en', country: string = 'us'): Observable<SourcePayload> {
	const apiUrl = process.env.NEWS_API_URL || 'https://newsapi.org/v2/'
	const appKey = process.env.NEWS_API_KEY || '9ed8490dae88488d98020bd516cbfe47'
	const url = urljoin(apiUrl, 'sources')
	const query = stringify({ language, country, url })
	// https://newsapi.org/v2/sources?language=en&country=us&apiKey=9ed8490dae88488d98020bd516cbfe47
	const promise = new Promise<fb.AuthResponse>((resolve, reject) => {
		try {
			FB.getLoginStatus((userIsLoggedResponse: fb.AuthResponse) => {
				if (userIsLoggedResponse.status === 'connected') {
					resolve(userIsLoggedResponse)
				} else {
					FB.login((askUserToLogResponse: fb.AuthResponse) => {
						resolve(askUserToLogResponse)
					})
				}
			})
		} catch (error) {
			reject(error)
		}
	})

	return Observable.fromPromise(promise)
}
