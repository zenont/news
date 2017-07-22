import * as types from './constants'

export const requestCategories = () => ({ type: types.NEWS_CATEGORY_FETCH_REQUEST })

export const requestCategoriesFulfilled = sources => ({ type: types.NEWS_CATEGORY_FETCH_RECEIVE, payload: sources })

