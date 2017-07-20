import { Map, List } from 'immutable'
import initState from './state'
import * as types from '../../constants'

export default function reducer(state = initState, action) {
	const { type, payload } = action
	const newState = state
	switch (type) {
		case types.NEWS_SOURCE_OPTIONS_REQUEST: {
			return newState
				.setIn(['sources', 'fetching'], true)
				.setIn(['sources', 'fetched'], false)
		}

		case types.NEWS_SOURCE_OPTIONS_RECEIVE: {
			const { append = false, sources = [] } = payload
			return newState
				.setIn(['sources', 'fetching'], false)
				.setIn(['sources', 'fetched'], true)
				.updateIn(['sources', 'options'], val => append === true ? val.concat(sources) : List(sources))
		}

		case types.NEWS_SOURCE_OPTIONS_SELECT: {
			return newState
				.setIn(['sources', 'selected'], List(payload))
		}

		default:
			return newState
	}
}
