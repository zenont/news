import { Observable } from 'rxjs/Observable'
import { takeUntil } from 'rxjs/operators/takeUntil'
import { map } from 'rxjs/operators/map'
import { switchMap } from 'rxjs/operators/switchMap'
import { catchError } from 'rxjs/operators/catchError'
import { AjaxResponse } from 'rxjs'
import { Action, MiddlewareAPI } from 'redux'
import { of } from 'rxjs/observable/of'
import { ActionsObservable, Epic, combineEpics } from 'redux-observable'
import { ArticleAction, ArticleActions, ArticleCancelAction, ArticleTopHeadlinesRequestAction } from '../actions'
import { fulfillArticles, rejectArticles } from '../creators'
import { RootState } from '../../common'
import { IAjaxArticleResponse, IAjaxErrorResponse, fetchTopHeadlines, isArticleResponse, isErrorResponse } from '../../../ajax'

const mapAjaxResponse$ = map<IAjaxArticleResponse | IAjaxErrorResponse, ArticleAction>(ajaxResp =>
	isArticleResponse(ajaxResp) ? fulfillArticles({
		articles: ajaxResp.response.articles,
		total: ajaxResp.response.totalResults
	}) : rejectArticles({ error: ajaxResp.response.code })
)

export const requestTopHeadlinesEpic: Epic<ArticleAction, RootState> =
	(action$, store) =>
		action$.ofType<ArticleTopHeadlinesRequestAction>(ArticleActions.requestTopHeadlines)
			.pipe(map(({ category, country, page, pageSize, sources }) => ({ category, country, page, pageSize, sources })))
			.pipe(switchMap(request =>
				fetchTopHeadlines(request)
					.pipe(mapAjaxResponse$)
					.pipe(catchError(error => of(rejectArticles(error))))
					.pipe(takeUntil(action$.ofType<ArticleCancelAction>()))
			))

export default combineEpics(
	requestTopHeadlinesEpic,
)
