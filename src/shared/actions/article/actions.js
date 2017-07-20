import { fetchSourcesAsync } from '../../api'
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
				console.log('downloaded news sources', json)
			})
	}
}
