import 'rxjs'
import { Observable } from 'rxjs/Observable'
import { combineEpics } from 'redux-observable'
import * as types from './constants'
import { fetchArticlesAsync } from '../ajax'
import { requestArticlesFulfilled } from './actions'

export const fetchArticlesEpic = (action$, { getState }) =>
	action$.ofType(types.NEWS_ARTICLE_FETCH_REQUEST)
		.map(action => {
			const { payload: sourceId } = action
			const sourceOptions = getState().news.getIn(['sources', 'options']).toArray()
			const selectedSource = sourceOptions
				.filter(option => option.id === sourceId)
				.shift()
			const sortBy = selectedSource && selectedSource.sortBysAvailables ? selectedSource.sortBysAvailables : []
			return {
				sourceId,
				sortBy
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

export default combineEpics(
	fetchArticlesEpic,
)
