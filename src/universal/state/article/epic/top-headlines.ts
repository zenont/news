import { Observable } from 'rxjs/Observable'
import { takeUntil } from 'rxjs/operators/takeUntil'
import { map } from 'rxjs/operators/map'
import { switchMap } from 'rxjs/operators/switchMap'
import { catchError } from 'rxjs/operators/catchError'
import { AjaxResponse } from 'rxjs'
import { Action, MiddlewareAPI } from 'redux'
import { of } from 'rxjs/observable/of'
import { ActionsObservable, Epic, combineEpics } from 'redux-observable'
import {
	ArticleAction,
	ArticleActions,
	ArticleCancelAction,
	ArticleTopHeadlinesRequestAction
} from '../actions'
import { fulfillArticles, rejectArticles } from '../creators'
import { RootState } from '../../common'
import {
	topHeadlinesQuery,
	TopHeadLineData,
	TopHeadlinesVars,
	query,
	GraphqlData
} from '../../../graph'

const mapRequest$ = map<ArticleTopHeadlinesRequestAction, TopHeadlinesVars>(
	({ country }) => ({
		country
	})
)

const fulfill$ = map<GraphqlData<TopHeadLineData>, ArticleAction>(({ data }) =>
	fulfillArticles({
		articles: data.headlines.articles,
		total: data.headlines.total
	})
)

export const requestTopHeadlinesEpic: Epic<any, RootState> = (action$, store) =>
	action$
		.ofType<ArticleTopHeadlinesRequestAction>(
			ArticleActions.requestTopHeadlines
		)
		.pipe(mapRequest$)
		.pipe(
			switchMap(request =>
				query<TopHeadLineData, TopHeadlinesVars>(topHeadlinesQuery, request)
					.pipe(fulfill$)
					.pipe(catchError(error => of(rejectArticles(error))))
					.pipe(takeUntil(action$.ofType<ArticleCancelAction>()))
			)
		)

export default combineEpics(requestTopHeadlinesEpic)
