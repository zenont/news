import { Url } from '../url'

describe('Url', () => {
	it('should stringify', () => {
		// https://newsapi.org/v2/sources?language=en&country=us&apiKey=12345
		const url = Url.of('https://newsapi.org/v2/')
			.route('sources')
			.query({ language: 'en', country: 'us', apiKey: '12345' })
			.stringify()

		expect(url).toMatchSnapshot()
	})

	it('should stringify without trailing slash', () => {
		const url = Url.of('https://newsapi.org/v2')
			.route('sources')
			.query({ language: 'en', country: 'us', apiKey: '12345' })
			.stringify()

		expect(url).toMatchSnapshot()
	})

	it('should stringify with many routes', () => {
		const url = Url.of('https://newsapi.org/v2/')
			.route('/sources/')
			.route('cnn')
			.route('business/')
			.route('/top/')
			.stringify()

		expect(url).toMatchSnapshot()
	})

	it('should stringify with many fluent routes', () => {
		const url = Url.of('https://newsapi.org/v2/')
			.route('/sources/', 'cnn', 'business/')
			.route('/top/')
			.stringify()

		expect(url).toMatchSnapshot()
	})

	it('should stringify with empty routes', () => {
		const url = Url.of('https://newsapi.org/v2/')
			.route('')
			.route()
			.stringify()

		expect(url).toMatchSnapshot()
	})

	it('should stringify with many fluent queries', () => {
		const url = Url.of('https://newsapi.org/v2')
			.query({ language: 'en' })
			.query({ country: 'us' })
			.query({ apiKey: '12345' })
			.stringify()

		expect(url).toMatchSnapshot()
	})

	it('should stringify with empty query', () => {
		const url = Url.of('https://newsapi.org/v2/')
			.query({})
			.stringify()

		expect(url).toMatchSnapshot()
	})
})
