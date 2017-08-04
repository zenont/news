import * as types from './constants'

export const requestArticles = (sourceId = 'cnn') =>
	({ type: types.NEWS_ARTICLE_FETCH_REQUEST, payload: sourceId })

export const requestArticlesFulfilled = (articles, append = false) =>
	({ type: types.NEWS_ARTICLE_FETCH_RECEIVE, payload: { articles, append } })

export const requestTopHeadlines = () =>
	({ type: types.NEWS_ARTICLE_TOP_HEADLINES_FETCH_REQUEST })

export const requestTopHeadlinesFulfilled = (articles, append = false) =>
	({ type: types.NEWS_ARTICLE_TOP_HEADLINES_FETCH_RECEIVE, payload: { articles, append } })
