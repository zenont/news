import { Observable } from 'rxjs/Rx'
import { Action, MiddlewareAPI } from 'redux'
import { ActionsObservable, Epic, combineEpics } from 'redux-observable'
import { IRootState } from '../store'
import { ArticleActions } from './types'
import { IArticleRejectAction } from './actions'
import { ArticlePayloadType, PayloadErrorType, PayloadStatuses, fetchTopHeadlines } from '../../ajax'
import { fulfillArticles, rejectArticles, requestArticles, requestTopHeadlines } from './creators'

function isSuccess(payload: ArticlePayloadType | PayloadErrorType): payload is ArticlePayloadType {
	return (payload as ArticlePayloadType).articles !== undefined
}

export const requestTopHeadlinesEpic: Epic<Action, IRootState> =
	(action$: ActionsObservable<Action>, store: MiddlewareAPI<IRootState>) =>
		action$.ofType(ArticleActions.requestTopHeadlines)
			.switchMap(() =>
				fetchTopHeadlines()
					.map(response => {
						if (isSuccess(response)) {
							return fulfillArticles(response.articles, response.totalResults)
						} else {
							const error = (response as PayloadErrorType).message
							return rejectArticles(error)
						}
					})
					.takeUntil(action$.ofType(ArticleActions.cancel))
					.catch((error: any) => Observable.of<IArticleRejectAction>({
						type: ArticleActions.reject,
						error
					}))
			)

export default combineEpics(
	requestTopHeadlinesEpic,
)
