export type Language =
	'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it' | 'nl' | 'no' | 'pt' | 'ru' | 'se' | 'ud' | 'zh'

export type SortBy =
	'relevancy' | 'popularity' | 'publishedAt'

export type Category =
	'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology'

export type Country =
	'ae' | 'ar' | 'at' | 'au' | 'be' | 'bg' | 'br' | 'ca' | 'ch' | 'cn' | 'de' | 'eg' | 'fr' | 'gb' | 'ru' | 'us'

export type Keywords = {
	readonly exact?: ReadonlyArray<string>
	readonly must?: ReadonlyArray<string>
	readonly not?: ReadonlyArray<string>
}

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
