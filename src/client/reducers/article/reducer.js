import initState from './state'

export default function reducer(state = initState, action) {
	const { type, payload } = action
	const newState = state

	switch (type) {
		default:
			return newState
	}
}
