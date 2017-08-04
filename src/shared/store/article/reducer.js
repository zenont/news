import { Map, List } from 'immutable'
import * as types from './constants'

export const initState = Map({
	articles: List(),
	fetched: false,
	fetching: false,
	headlines: Map({
		top: Map({
			articles: List(),
			source: Map({
				id: 'cnn',
				sortBy: 'top',
			})
		})
	})
})

export default function reducer(state = initState, action) {
	const { type, payload } = action
	const newState = state

	switch (type) {
		case types.NEWS_ARTICLE_FETCH_REQUEST: {
			return newState
				.set('fetching', true)
		}

		case types.NEWS_ARTICLE_FETCH_RECEIVE: {
			const { append = false, articles = [] } = payload
			return newState
				.update('articles', val => append === true ? val.concat(articles) : List(articles))
		}

		case types.NEWS_ARTICLE_TOP_HEADLINES_FETCH_REQUEST: {
			return newState
				.setIn(['headlines', 'top', 'fetched'], false)
		}

		case types.NEWS_ARTICLE_TOP_HEADLINES_FETCH_RECEIVE: {
			const { append = false, articles = [] } = payload
			return newState
				.setIn(['headlines', 'top', 'fetched'], true)
				.setIn(['headlines', 'top', 'fetching'], false)
				.updateIn(['headlines', 'top', 'articles'], val => append === true ? val.concat(articles) : List(articles))
		}

		case types.NEWS_ARTICLE_TOP_HEADLINES_FETCH_CANCELLED:
		case types.NEWS_ARTICLE_TOP_HEADLINES_FETCH_REJECTED: {
			return newState
				.setIn(['headlines', 'top', 'fetching'], false)
		}

		default:
			return newState
	}
}

