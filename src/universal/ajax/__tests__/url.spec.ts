import { Url } from '../url'

describe('Url', () => {
	it('should stringify', () => {
		// https://newsapi.org/v2/sources?language=en&country=us&apiKey=12345
		const url = Url.of('https://newsapi.org/v2/')
			.route('sources')
			.query({ language: 'en', country: 'us', apiKey: '12345' })
			.stringify()

		expect(url).toEqual('https://newsapi.org/v2/sources?language=en&country=us&apiKey=12345')
	})
})
