import urlJoin from 'url-join'
import { parse as parseQueryString } from 'query-string'

const NEWS_API_URL = process.env.NEWS_API_URL
const NEWS_API_KEY = process.env.NEWS_API_KEY
const headers = new Headers({
	'Content-Type': 'application/json'
})

export function fetchSourcesAsync(language = 'en', country = 'us', category = null) {
	const params = {
		language,
		country,
		category,
		apiKey: NEWS_API_KEY
	}

	const init = {
		method: 'GET',
		headers,
		mode: 'cors',
		cache: 'default'
	}

	const url = urlJoin(NEWS_API_URL, 'sources', parseQueryString(params))
	return fetch(url, init)
}

//const apiKey = '9ed8490dae88488d98020bd516cbfe47'
// https://newsapi.org/v1/sources?language=en
