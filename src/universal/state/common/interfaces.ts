import { Article } from '../../model'

export type ArticleState = {
	readonly language: string
	readonly country: string
	readonly sources: ReadonlyArray<string>
	readonly articles: ReadonlyArray<Article>
	readonly fetched: boolean
	readonly fetching: boolean
	readonly error?: string | Error | null
}

export type RootState = {
	article: ArticleState
}
