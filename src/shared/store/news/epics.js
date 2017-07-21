import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/takeUntil'
import Observable from 'rxjs/Observable'
import { combineEpics } from 'redux-observable'
import { fetchSourcesAsync, fetchArticlesAsync } from './api'
import * as types from './constants'
import { requestArticlesFulfilled, requestSourceOptionsFulfilled } from './actions'

export const fetchArticlesEpic = action$ =>
	action$.ofType(types.NEWS_ARTICLE_FETCH_REQUEST)
		.mergeMap((action, store) => {
			const { payload: sourceId } = action
			const { sources: { options: sourceOptions } } = store.news.toJS()
			const selectedSource = sourceOptions
				.filter(option => option.id === sourceId)
				.shift()
			const { id = 'cnn', sortBysAvailables = ['top'] } = selectedSource

			return fetchArticlesAsync(id, sortBysAvailables[0])
				.map(json => {
					const { articles } = json
					requestArticlesFulfilled(articles, false)
				})
				.catch(error => Observable.of({
					type: types.NEWS_ARTICLE_FETCH_REJECTED,
					payload: error.xhr.response,
					error: true
				}))
				.takeUntil(action$.ofType(types.NEWS_ARTICLE_FETCH_CANCELLED))
		})

export const fetchSourcesEpic = action$ =>
	action$.ofType(types.NEWS_SOURCE_OPTIONS_FETCH_REQUEST)
		.mergeMap((action, store) => {
			return fetchSourcesAsync()
				.map(json => {
					const { sources } = json
					requestSourceOptionsFulfilled(sources)
				})
				.catch(error => Observable.of({
					type: types.NEWS_SOURCE_OPTIONS_FETCH_REJECTED,
					payload: error.xhr.response,
					error: true
				}))
				.takeUntil(action$.ofType(types.NEWS_SOURCE_OPTIONS_FETCH_CANCELLED))
		})

export default combineEpics(
	fetchArticlesEpic,
	fetchSourcesEpic
)
