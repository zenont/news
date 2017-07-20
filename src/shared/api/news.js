import urlJoin from 'url-join'
import { stringify } from 'query-string'

const NEWS_API_URL = process.env.NEWS_API_URL
const NEWS_API_KEY = process.env.NEWS_API_KEY

export function fetchSourcesAsync(language = 'en', country = 'us', category = null) {
	const params = {
		language,
		country,
		category,
		apiKey: NEWS_API_KEY
	}

	const init = {
		method: 'GET',
		mode: 'cors',
		cache: 'default'
	}

	const url = urlJoin(NEWS_API_URL, 'sources', `?${stringify(params)}`)
	return fetch(url, init)
}
