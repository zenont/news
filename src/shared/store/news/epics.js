import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/takeUntil'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/observable/of'
import { Observable } from 'rxjs/Observable'
import { combineEpics } from 'redux-observable'
import { fetchSourcesAsync, fetchArticlesAsync } from './api'
import * as types from './constants'
import { requestArticlesFulfilled, requestSourceOptionsFulfilled } from './actions'

export const fetchArticlesEpic = (action$, { getState }) =>
	action$.ofType(types.NEWS_ARTICLE_FETCH_REQUEST)
		.map(action => {
			const { payload: sourceId } = action
			const sourceOptions = getState().news.getIn(['sources', 'options']).toArray()
			const selectedSource = sourceOptions
				.filter(option => option.id === sourceId)
				.shift()

			return {
				sourceId,
				sortBy: selectedSource ? selectedSource.sortBysAvailables : []
			}
		})
		.debounceTime(250)
		.distinctUntilChanged()
		.mergeMap(({ sourceId, sortBy }) =>
			fetchArticlesAsync(sourceId, sortBy[0])
				.map(response => requestArticlesFulfilled(response.json, false))
				.catch(error => Observable.of({
					type: types.NEWS_ARTICLE_FETCH_REJECTED,
					payload: error.xhr.response,
					error: true
				}))
				.takeUntil(action$.ofType(types.NEWS_ARTICLE_FETCH_CANCELLED)))

export const fetchSourcesEpic = action$ =>
	action$.ofType(types.NEWS_SOURCE_OPTIONS_FETCH_REQUEST)
		.mergeMap((action, store) =>
			fetchSourcesAsync()
				.map(response => requestSourceOptionsFulfilled(response.json))
				.catch(error => Observable.of({
					type: types.NEWS_SOURCE_OPTIONS_FETCH_REJECTED,
					payload: error.xhr.response,
					error: true
				}))
				.takeUntil(action$.ofType(types.NEWS_SOURCE_OPTIONS_FETCH_CANCELLED)))

export default combineEpics(
	fetchArticlesEpic,
	fetchSourcesEpic
)
