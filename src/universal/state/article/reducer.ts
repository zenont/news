import { ArticleAction, ArticleActions } from './actions'
import initState from './state'
import { ArticleState } from '../common'

export default function reducer(state: ArticleState = initState, action: ArticleAction): ArticleState {
	switch (action.type) {
		case ArticleActions.requestTopHeadlines: {
			const {  } = action
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
