import { fetchSourcesAsync } from '../../api'

export function fetchNewsSourcesAsync() {
	return ({ dispatch }) => {
		return fetchSourcesAsync()
			.then(response => {
				if (response.ok) return response.json()
			}, error => console.warn(error))
			.then(json => {
				console.log('downloaded news sources', json)
			})
	}
}
