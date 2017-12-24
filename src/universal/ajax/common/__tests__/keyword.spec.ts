import { LogicalOperators, exactly, exclude, include } from '../keyword'

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
})
