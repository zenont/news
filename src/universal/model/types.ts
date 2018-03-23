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

export type UnhandledError = string | Error | null
