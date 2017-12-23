import { ArticleActions } from './types'
import { ArticleActionTypes } from './actions'
import initState, { IArticleState } from './state'

export default function reducer(state: IArticleState = initState, action: ArticleActionTypes): IArticleState {
	switch (action.type) {
		case ArticleActions.request: {
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
