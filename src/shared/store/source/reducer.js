import { Map, List } from 'immutable'
import * as types from './constants'

export const initState = Map({
	country: Map({
		selected: 'us', /* au, de, gb, in, it, us */
		options: List([
			{ id: 'us', name: 'USA' },
			{ id: 'fr', name: 'France' },
			{ id: 'de', name: 'Germany' },
			{ id: 'gb', name: 'UK' },
			{ id: 'in', name: 'India' },
			{ id: 'it', name: 'Italy' },
		])
	}),
	language: Map({
		selected: 'en', /* en, de, fr */
		options: List([
			{ id: 'en', name: 'English' },
			{ id: 'de', name: 'Deutsch' },
			{ id: 'fr', name: 'Français' },
		])
	}),
	sources: List(),
	fetched: false,
	fetching: false,
})

export default function reducer(state = initState, action) {
	const { type, payload } = action
	const newState = state

	switch (type) {
		case types.NEWS_SOURCE_FETCH_REQUEST: {
			return newState
				.set('fetching', true)
		}

		case types.NEWS_SOURCE_FETCH_RECEIVE: {
			const { append = false, sources: list = [] } = payload
			return newState
				.update('sources', val => append === true ? val.concat(list) : List(list))
		}

		case types.NEWS_SOURCE_SET_LANGUAGE: {
			return newState
				.setIn(['language', 'selected'], payload)
		}

		default:
			return newState
	}
}

