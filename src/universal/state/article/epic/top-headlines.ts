import { Observable } from 'rxjs/Observable'
import { map } from 'rxjs/operator/map'
import { switchMap } from 'rxjs/operator/switchMap'
import { Action, MiddlewareAPI } from 'redux'
import { ActionsObservable, Epic, combineEpics } from 'redux-observable'
import { RootState } from '../../common'
import { ArticleAction, ArticleTopHeadlinesRequestAction } from '../actions'
import { fetchTopHeadlines } from '../../../ajax'
import { fulfillArticles, rejectArticles } from '../creators'

export const requestTopHeadlinesEpic: Epic<ArticleAction, RootState> =
	(action$, store) =>
		action$.ofType<ArticleTopHeadlinesRequestAction>()
/*.pipe(map(action => action))
.pipe(switchMap(() =>
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
		.catch((error: any) => Observable.of<ArticleRejectAction>({
			type: ArticleActions.reject,
			error
		}))
))*/

export default combineEpics(
	requestTopHeadlinesEpic,
)
