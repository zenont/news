import { Map, List } from 'immutable'

const state = Map({
	articles: List(),
	selected: 'cnn',
	fetched: false,
	fetching: false,
	sources: Map({
		options: List(),
		selected: 'cnn',
		fetched: false,
		fetching: true
	})
})

export default state
