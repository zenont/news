
export class ArticleSource {
	public id?: string
	public name: string
}

export class Article {
	public source?: ArticleSource
	public author?: string
	public title: string
	public description: string
	public url: string
	public urlToImage?: string
	public publishedAt: Date
}
