import * as types from './constants'

export const requestArticles = (sourceId = 'cnn') =>
	({ type: types.NEWS_ARTICLE_FETCH_REQUEST, payload: sourceId })

export const requestArticlesFulfilled = (articles, append = false) =>
	({ type: types.NEWS_ARTICLE_FETCH_RECEIVE, payload: { articles, append } })

export const requestSourceOptions = () => ({ type: types.NEWS_SOURCE_OPTIONS_REQUEST })

export const requestSourceOptionsFulfilled = (sources, append = false) =>
	({ type: types.NEWS_SOURCE_OPTIONS_RECEIVE, payload: { sources, append } })

export const selectSourceOption = source => ({ type: types.NEWS_SOURCE_OPTIONS_SELECT, payload: source })
