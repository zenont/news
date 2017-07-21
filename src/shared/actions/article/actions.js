import { fetchSourcesAsync, fetchArticlesAsync } from '../../api'
import * as types from '../../constants'

export function fetchSourceOptionsAsync() {
	return (dispatch) => {
		dispatch({ type: types.NEWS_SOURCE_OPTIONS_REQUEST })

		return fetchSourcesAsync()
			.then(response => (response.json()), error => dispatch({ type: types.APP_SET_ERROR, payload: error }))
			.then(json => {
				const { sources } = json
				dispatch({
					type: types.NEWS_SOURCE_OPTIONS_RECEIVE,
					payload: {
						append: false,
						sources
					}
				})
			})
	}
}

export function fetchArticlesBySourceIdAsync(sourceId = 'cnn') {
	return (dispatch, getState) => {
		const { sources: { options: sourceOptions } } = getState().news.toJS()
		const selectedSource = sourceOptions.filter(sourceOption => sourceOption.id === sourceId)
		const { id = 'cnn', sortBysAvailables = ['top'] } = selectedSource
		console.log('fetchArticlesBySourceIdAsync', sourceId, id, selectedSource, sourceOptions)
		dispatch({ type: types.NEWS_ARTICLE_REQUEST })
		return fetchArticlesAsync(id, sortBysAvailables[0])
			.then(response => (response.json()), error => dispatch({ type: types.APP_SET_ERROR, payload: error }))
			.then(json => {
				const { articles } = json
				dispatch({
					type: types.NEWS_ARTICLE_RECEIVE,
					payload: {
						append: false,
						articles
					}
				})
			})
	}
}

export function selectSourceId(sourceId = 'cnn') {
	return { type: types.NEWS_SOURCE_OPTIONS_SELECT, payload: sourceId }
}
