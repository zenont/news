import { Map, List } from 'immutable'
import * as types from './constants'

export const initState = Map({
	categories: List(),
	fetched: false,
	fetching: false,
})

export default function reducer(state = initState, action) {
	const { type, payload } = action
	const newState = state

	switch (type) {
		case types.NEWS_CATEGORY_FETCH_REQUEST: {
			return newState
				.set('fetching', true)
		}

		case types.NEWS_CATEGORY_FETCH_RECEIVE: {
			const { append = false, articles = [] } = payload
			return newState
				.update('categories', val => append === true ? val.concat(articles) : List(articles))
		}

		default:
			return newState
	}
}

