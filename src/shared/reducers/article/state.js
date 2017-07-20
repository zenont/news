import { Map, List } from 'immutable'

const articles = []
for (let i = 0; i < 99; i++) {
	const id = i + 1
	articles.push({ id, summary: `article ${id}` })
}

const state = Map({
	articles: List(articles),
	selected: List(),
	fetched: false,
	sources: Map({
		options: List(),
		selected: List(),
		fetched: false,
		fetching: true
	})
})

export default state
