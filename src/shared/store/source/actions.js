import * as types from './constants'

export const setLanguage = (language = 'en') => ({ type: types.NEWS_SOURCE_SET_LANGUAGE })

export const setCountry = (country = 'us') => ({ type: types.NEWS_SOURCE_SET_COUNTRY })

export const requestSources = () => ({ type: types.NEWS_SOURCE_FETCH_REQUEST })

export const requestSourcesFulfilled = (sources, append = false) => ({ type: types.NEWS_SOURCE_FETCH_RECEIVE, payload: { sources, append } })

