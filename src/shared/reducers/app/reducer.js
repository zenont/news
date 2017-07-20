import initState from './state'
import * as types from '../../constants'

export default function reducer(state = initState, action) {
	const { type, payload } = action
	const newState = state

	switch (type) {
		case types.APP_SET_ERROR: {
			return newState
				.set('error', payload)
				.set('hasError', !!payload)
		}

		default:
			return newState
	}
}
