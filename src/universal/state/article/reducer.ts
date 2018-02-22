import { ArticleActions } from './types'
import { ArticleActionTypes } from './actions'
import initState from './state'
import { ArticleState } from '../common'

export default function reducer(state: ArticleState = initState, action: ArticleActionTypes): ArticleState {
	switch (action.type) {
		case ArticleActions.request: {
			const { country, language, sources } = action
			return {
				...state,
				country,
				language,
				sources,
				fetching: true,
				fetched: false,
				error: undefined
			}
		}

		case ArticleActions.requestTopHeadlines: {
			return {
				...state,
				fetching: true,
				fetched: false,
				error: undefined
			}
		}

		case ArticleActions.reject: {
			const { error } = action
			return {
				...state,
				fetching: false,
				fetched: false,
				error
			}
		}

		case ArticleActions.fulfill: {
			const { articles } = action
			return {
				...state,
				fetching: false,
				fetched: true,
				error: undefined,
				articles
			}
		}

		case ArticleActions.cancel: {
			return {
				...state,
				fetching: false,
				fetched: false,
				error: undefined
			}
		}

		default:
			return state
	}
}
