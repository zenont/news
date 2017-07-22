import { Map, List } from 'immutable'
import * as types from './constants'

export const initState = Map({
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

		default:
			return newState
	}
}

