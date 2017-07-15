import initState from './state'
import { combineReducers } from 'redux'

function titleReducer(state = initState, action) {
	const { type, payload } = action
	const newState = state

	switch (type) {
		default:
			return newState
	}
}

function navReducer(state = initState, action) {
	const { type, payload } = action
	const newState = state

	switch (type) {
		default:
			return newState
	}
}

export default combineReducers({ titleReducer, navReducer })
