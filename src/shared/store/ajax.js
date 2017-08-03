import 'rxjs/add/operator/map'
import urlJoin from 'url-join'
import { stringify } from 'query-string'
import { ajax } from 'rxjs/observable/dom/ajax'

const NEWS_API_URL = process.env.NEWS_API_URL
const NEWS_API_KEY = process.env.NEWS_API_KEY

const settings = {
	crossDomain: true,
	responseType: 'json'
}

export function fetchSourcesAsync(language = 'en', country = 'us', category = null) {
	const params = {
		language,
		country,
		category,
		apiKey: NEWS_API_KEY
	}

	const url = urlJoin(NEWS_API_URL, 'sources', `?${stringify(params)}`)
	return ajax({
		...settings,
		url
	}).map(ajaxResponse => ({
		status: ajaxResponse.status,
		json: ajaxResponse.response.sources,
		response: ajaxResponse
	}))
}

export function fetchArticlesAsync(source = 'cnn', sort = null) {
	const params = {
		source,
		sortBy: sort,
		apiKey: NEWS_API_KEY
	}

	const url = urlJoin(NEWS_API_URL, 'articles', `?${stringify(params)}`)
	return ajax({
		...settings,
		url
	}).map(ajaxResponse => ({
		status: ajaxResponse.status,
		json: ajaxResponse.response.articles,
		response: ajaxResponse
	}))
}
