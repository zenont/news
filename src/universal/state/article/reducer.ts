import { ArticleAction, ArticleActions } from './actions'
import initState from './state'
import { ArticleState } from '../common'

export default (state: ArticleState = initState, action: ArticleAction): ArticleState => {
	switch (action.type) {
		case ArticleActions.requestTopHeadlines: {
			return {
				...state,
				fetching: true,
				fetched: false,
				error: undefined
			}
		}
/*
		case ArticleActions.reject: {
			const { error } = action
			return {
				...state,
				fetching: false,
				fetched: false,
				error
			}
		}
*/
		case ArticleActions.fulfill: {
			const { articles, total } = action
			return {
				...state,
				fetching: false,
				fetched: true,
				error: undefined,
				articles,
				total
			}
		}

		case ArticleActions.cancel: {
			return {
				...state,
				fetching: false,
			}
		}

		default:
			return state
	}
}
