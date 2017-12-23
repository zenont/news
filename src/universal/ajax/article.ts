import { stringify } from 'query-string'
import { AjaxResponse, Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import { ajax } from 'rxjs/observable/dom/ajax'
import urlJoin from 'url-join'

export function fetchSources(): Observable<fb.AuthResponse> {
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
