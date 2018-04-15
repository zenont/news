import { Country, Article } from '../../../model'

export type TopHeadlinesVars = {
	readonly country?: Country
}

export type TopHeadLineData = {
	readonly headlines: {
		readonly articles: ReadonlyArray<Article>
		readonly total: number
	}
}
