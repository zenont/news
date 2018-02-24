import { takeUntil } from 'rxjs/operators/takeUntil'
import { Action, MiddlewareAPI } from 'redux'
import { map } from 'rxjs/operators/map'
import { switchMap } from 'rxjs/operators/switchMap'
import { catchError } from 'rxjs/operators/catchError'
import { AjaxResponse } from 'rxjs'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { ActionsObservable, Epic, combineEpics } from 'redux-observable'
import { ArticleAction, ArticleActions, ArticleTopHeadlinesRequestAction } from '../actions'
import { fulfillArticles, rejectArticles } from '../creators'
import { RootState } from '../../common'
import { IAjaxArticleResponse, IAjaxErrorResponse, fetchTopHeadlines, isArticleResponse, isErrorResponse } from '../../../ajax'

const mapAjaxResponse$ = map<IAjaxArticleResponse | IAjaxErrorResponse, ArticleAction>(ajaxResp =>
	isArticleResponse(ajaxResp) ? fulfillArticles(ajaxResp.response.articles, ajaxResp.response.totalResults) : rejectArticles(ajaxResp.response.code)
)

export const requestTopHeadlinesEpic: Epic<ArticleAction, RootState> =
	(action$, store) =>
		action$.ofType<ArticleTopHeadlinesRequestAction>()
			.pipe(map(action => action))
			.pipe(switchMap(request =>
				fetchTopHeadlines(request)
					.pipe(mapAjaxResponse$)
					.pipe(catchError(error => of(rejectArticles(error))))
					.pipe(takeUntil(action$.ofType(ArticleActions.cancel)))
			))

export default combineEpics(
	requestTopHeadlinesEpic,
)
