import { LogicalOperators, exactly, exclude, group, include, isLogicalOperator } from '../keyword'

describe('Keyword', () => {
	it('should exactly', () => {
		const phrase = exactly('some phrase')
		expect(phrase).toEqual('"some phrase"')
	})

	it('should include', () => {
		const phrase = include('phrase', 'phrase2')
		expect(phrase).toEqual('+phrase+phrase2')
	})

	it('should exclude', () => {
		const phrase = exclude('phrase', 'phrase2')
		expect(phrase).toEqual('-phrase-phrase2')
	})

	it('should group', () => {
		const reduced = group('yay', LogicalOperators.And, 'nay', LogicalOperators.Or, 'ok')
		expect(reduced).toEqual('yay AND nay OR ok')
	})

	it('should group with leading operator', () => {
		const reduced = group(LogicalOperators.Not, 'yay', LogicalOperators.And, 'nay', LogicalOperators.Or, 'ok')
		expect(reduced).toEqual('yay AND nay OR ok')
	})

	it('should group with trailing operator', () => {
		const reduced = group('yay', LogicalOperators.And, 'nay', LogicalOperators.Or)
		expect(reduced).toEqual('yay AND nay')
	})

	/*it('should group with invalid operator', () => {
		const reduced = group('yay', LogicalOperators.And, LogicalOperators.And, 'nay')
		expect(reduced).toEqual('yay AND nay')
	})*/
})
