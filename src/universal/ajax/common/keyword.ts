export type MatchType = {
	exact?: boolean
	phrase: string
}

export enum LogicalOperators {
	And = 'AND',
	Or = 'OR',
	Not = 'NOT'
}

function prepend(prependchar: string, ...phrases: string[]) {
	return phrases.map(phrase => `${prependchar}${phrase}`).join('')
}

export function exactly(phrase: string): string {
	if (phrase == null || phrase.length === 0) return ''
	return `"${phrase}"`
}

export function include(...phrases: string[]): string {
	return prepend('+', ...phrases)
}

export function exclude(...phrases: string[]): string {
	return prepend('-', ...phrases)
}
