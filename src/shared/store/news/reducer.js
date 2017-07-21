import { List } from 'immutable'
import initState from './state'
import * as types from './constants'

export default function reducer(state = initState, action) {
	const { type, payload } = action
	const newState = state

	switch (type) {
		case types.NEWS_SOURCE_OPTIONS_FETCH_REQUEST: {
			return newState
				.setIn(['sources', 'fetching'], true)
				.setIn(['sources', 'fetched'], false)
		}

		case types.NEWS_SOURCE_OPTIONS_FETCH_RECEIVE: {
			const { append = false, sources = [] } = payload
			return newState
				.setIn(['sources', 'fetching'], false)
				.setIn(['sources', 'fetched'], true)
				.updateIn(['sources', 'options'], val => append === true ? val.concat(sources) : List(sources))
		}

		case types.NEWS_SOURCE_OPTIONS_SELECT: {
			return newState
				.setIn(['sources', 'selected'], payload)
		}

		case types.NEWS_ARTICLE_FETCH_REQUEST: {
			return newState
				.set('fetching', true)
		}

		case types.NEWS_ARTICLE_FETCH_RECEIVE: {
			const { append = false, articles = [] } = payload
			return newState
				.update('articles', val => append === true ? val.concat(articles) : List(articles))
		}

		default:
			return newState
	}
}
