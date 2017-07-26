import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/takeUntil'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/observable/of'
import { Observable } from 'rxjs/Observable'
import { combineEpics } from 'redux-observable'
import * as types from './constants'
import { fetchSourcesAsync } from '../ajax'
import { requestSourcesFulfilled } from './actions'

export const fetchSourcesEpic = action$ =>
	action$.ofType(types.NEWS_SOURCE_FETCH_REQUEST)
		.mergeMap((action, store) =>
			fetchSourcesAsync()
				.map(response => response.json)
				.map(sources => sources.map(source => ({ ...source, hasFetched: false })))
				.map(sources => requestSourcesFulfilled(sources))
				.catch(error => Observable.of({
					type: types.NEWS_SOURCE_FETCH_REJECTED,
					payload: error.xhr.response,
					error: true
				}))
				.takeUntil(action$.ofType(types.NEWS_SOURCE_FETCH_CANCELLED)))

export default combineEpics(
	fetchSourcesEpic,
)
