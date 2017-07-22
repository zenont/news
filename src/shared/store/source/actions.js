import * as types from './constants'

export const requestSources = () => ({ type: types.NEWS_SOURCE_FETCH_REQUEST })

export const requestSourcesFulfilled = (sources, append = false) => ({ type: types.NEWS_SOURCE_FETCH_RECEIVE, payload: { sources, append } })

