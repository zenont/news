export type Language =
	'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it' | 'nl' | 'no' | 'pt' | 'ru' | 'se' | 'ud' | 'zh'

export type SortBy =
	'relevancy' | 'popularity' | 'publishedAt'

export type Category =
	'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology'

export type Country =
	'ae' | 'ar' | 'at' | 'au' | 'be' | 'bg' | 'br' | 'ca' | 'ch' | 'cn' | 'de' | 'eg' | 'fr' | 'gb' | 'ru' | 'us'

export type Keywords = {
	exact?: ReadonlyArray<string>
	must?: ReadonlyArray<string>
	not?: ReadonlyArray<string>
}

export class TopHeadlinesRequest {
	public readonly country?: Country
	public readonly category?: Category
	public readonly sources?: ReadonlyArray<string>
	public readonly pageSize?: number
	public readonly page?: number
}

export class EverythingRequest {
	public readonly q?: Keywords
	public readonly sources?: ReadonlyArray<string>
	public readonly domains?: ReadonlyArray<string>
	public readonly from?: Date
	public readonly to?: Date
	public readonly language?: Language
	public readonly sortBy?: SortBy
	public readonly pageSize?: number
	public readonly page?: number
}
