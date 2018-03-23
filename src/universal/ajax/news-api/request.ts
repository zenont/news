import { Category, Country, Keywords, Language, SortBy } from '../../model'

export type TopHeadlinesRequest = {
	readonly country?: Country
	readonly category?: Category
	readonly sources?: ReadonlyArray<string>
	readonly pageSize?: number
	readonly page?: number
}

export type EverythingRequest = {
	readonly q?: Keywords
	readonly sources?: ReadonlyArray<string>
	readonly domains?: ReadonlyArray<string>
	readonly from?: Date
	readonly to?: Date
	readonly language?: Language
	readonly sortBy?: SortBy
	readonly pageSize?: number
	readonly page?: number
}

export type SourcesRequest = {
	readonly category: Category
	readonly language: Language
	readonly country: Country
}
