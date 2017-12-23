import * as A from '../actions'
import * as C from '../creators'
import { Article } from '../../../model'

describe('article creators', () => {
	it('should request', () => {
		const action = C.requestArticles()
		expect(action).toMatchSnapshot()
	})

	it('should fulfill', () => {
		const artiles: Article[] = [
			{
				author: 'author1',
				description: 'desc1',
				publishedAt: new Date(2000, 1),
				source: {
					id: '1',
					name: 'source1'
				},
				title: 'title1',
				url: 'url1',
				urlToImage: 'urlImage1'
			},
			{
				author: 'author2',
				description: 'desc2',
				publishedAt: new Date(2000, 2),
				source: {
					id: '2',
					name: 'source2'
				},
				title: 'title2',
				url: 'url2',
				urlToImage: 'urlImage2'
			}
		]

		const action = C.fulfillArticles(artiles, artiles.length)
		expect(action).toMatchSnapshot()
	})

	it('should reject with error message', () => {
		const action = C.rejectArticles('some error')
		expect(action).toMatchSnapshot()
	})

	it('should reject with Error', () => {
		const action = C.rejectArticles(new Error('some error'))
		expect(action).toMatchSnapshot()
	})

	it('should reject with any error', () => {
		const action = C.rejectArticles(1000)
		expect(action).toMatchSnapshot()
	})

	it('should cancel', () => {
		const action = C.cancelArticles()
		expect(action).toMatchSnapshot()
	})

	it('should request top headlines', () => {
		const action = C.requestTopHeadlines()
		expect(action).toMatchSnapshot()
	})
})
