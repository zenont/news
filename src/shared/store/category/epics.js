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
import { requestSourceOptionsFulfilled } from './actions'

export const fetchSourcesEpic = action$ =>
	action$.ofType(types.NEWS_SOURCE_OPTIONS_FETCH_REQUEST)
		.mergeMap((action, store) =>
			fetchSourcesAsync()
			// [...new Set(sourceOptions.map(source => source.category))]
				.map(response => requestSourceOptionsFulfilled(response.json))
				.catch(error => Observable.of({
					type: types.NEWS_SOURCE_OPTIONS_FETCH_REJECTED,
					payload: error.xhr.response,
					error: true
				}))
				.takeUntil(action$.ofType(types.NEWS_SOURCE_OPTIONS_FETCH_CANCELLED)))

export default combineEpics(
	fetchSourcesEpic,
)
