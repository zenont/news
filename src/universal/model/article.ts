
import { Source } from './source'

export class Article {
	source?: Source
	author?: string
	title: string
	description: string
	url: string
	urlToImage?: string
	publishedAt: Date
}
