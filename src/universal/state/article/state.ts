import { Article } from '../../model'

export interface IArticleState {
	readonly language: string
	readonly country: string
	readonly articles: Article[]
	readonly fetched: boolean
	readonly fetching: boolean
	readonly error: string | Error | any | undefined
}

const initState: IArticleState = {
	language: 'en',
	country: 'us',
	articles: [],
	fetched: false,
	fetching: true,
	error: undefined
}

export default initState
