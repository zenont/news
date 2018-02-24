
export type ArticleSource = {
	readonly id?: string
	readonly name: string
}

export type Article = {
	readonly source?: ArticleSource
	readonly author?: string
	readonly title: string
	readonly description: string
	readonly url: string
	readonly urlToImage?: string
	readonly publishedAt: Date
}
