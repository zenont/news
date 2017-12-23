import { Article } from '../../model'

export interface IArticleState {
	readonly articles: Article[]
	readonly fetched: boolean
	readonly fetching: boolean
	readonly error: string | Error | any | undefined
}

const initState: IArticleState = {
	articles: [],
	fetched: false,
	fetching: true,
	error: undefined
}

export default initState
