export enum LogicalOperators {
	And = 'AND',
	Or = 'OR',
	Not = 'NOT'
}

function prepend(prependchar: string, ...phrases: string[]): string {
	if (phrases == null || phrases.length === 0) return ''
	const reduced = phrases.reduce((previousValue, currentValue, index) => `${previousValue}${prependchar}${currentValue}`)
	return `${prependchar}${reduced}`
}

export function isLogicalOperator(phrase: string | LogicalOperators): phrase is LogicalOperators {
	return phrase === LogicalOperators.And || phrase === LogicalOperators.Not || phrase === LogicalOperators.Or
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

export function group(...phrases: Array<string | LogicalOperators>) {
	if (phrases == null || phrases.length === 0) return ''

	// we get rid of any leading operators
	if (isLogicalOperator(phrases[0])) {
		phrases.splice(0, 1)
	}

	const reduced = phrases
		.reduce((previousValue, currentValue, index, array) => {
			// we ignore any trailing operators
			if (index >= array.length - 1 && isLogicalOperator(currentValue)) {
				return previousValue
			}
			return `${previousValue} ${currentValue}`
		})

	return reduced
}
