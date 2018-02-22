import { ArticleState } from '../common'
import { Article } from '../../model'

const initState: ArticleState = {
	language: 'en',
	country: 'us',
	sources: ['cnn', 'msnbc', 'abc-news', 'bloomberg', 'politico', 'reuters', 'time'],
	articles: [],
	fetched: false,
	fetching: true,
	error: undefined,
	total: 0
}

export default initState
