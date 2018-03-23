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

function pruneLeadingOperators(...phrases: Array<string | LogicalOperators>): Array<string | LogicalOperators> {
	if (isLogicalOperator(phrases[0])) {
		phrases.splice(0, 1)
		return pruneLeadingOperators(...phrases)
	}
	return phrases
}

export function group(...phrases: Array<string | LogicalOperators>) {
	if (phrases == null || phrases.length === 0) return ''

	// we get rid of any leading operators
	const pruned = pruneLeadingOperators(...phrases)
	if (pruned.length === 0) return ''

	const reduced = pruned
		.reduce((previousValue, currentValue, index, array) => {
			const isOperator = isLogicalOperator(currentValue)
			const isPreviousOperator = isLogicalOperator(array[index - 1])
			// we ignore any trailing operators
			if (index >= array.length - 1 && isOperator === true) {
				return previousValue
			} else if (isOperator === true && isPreviousOperator === true) {
				return previousValue
			}
			return `${previousValue} ${currentValue}`
		})

	return reduced
}
