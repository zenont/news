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
	IAjaxArticleResponse,
	IAjaxErrorResponse,
	fetchTopHeadlines,
	isArticleResponse,
	isErrorResponse,
	query,
	GraphqlData
} from '../../../ajax'
import { Country } from '../../../model'
import testQueryQl from '../../../graph/queries/test.graphql'
import topHeadlinesQuery from '../../../graph/queries/top-headlines.graphql'

const mapAjaxResponse$ = map<
	IAjaxArticleResponse | IAjaxErrorResponse,
	ArticleAction
>(
	ajaxResp =>
		isArticleResponse(ajaxResp)
			? fulfillArticles({
					articles: ajaxResp.response.articles,
					total: ajaxResp.response.totalResults
			  })
			: rejectArticles({ error: ajaxResp.response.code })
)

export const requestTopHeadlinesEpic: Epic<ArticleAction, RootState> = (
	action$,
	store
) =>
	action$
		.ofType<ArticleTopHeadlinesRequestAction>(
			ArticleActions.requestTopHeadlines
		)
		.pipe(
			map(({ category, country, page, pageSize, sources }) => ({
				category,
				country,
				page,
				pageSize,
				sources
			}))
		)
		.pipe(
			switchMap(request =>
				fetchTopHeadlines(request)
					.pipe(mapAjaxResponse$)
					.pipe(catchError(error => of(rejectArticles(error))))
					.pipe(takeUntil(action$.ofType<ArticleCancelAction>()))
			)
		)

type TopHeadlinesVars = {
	readonly country?: Country
}
type TopHeadLineResponse = {

}
const mapRequest$ = map<ArticleTopHeadlinesRequestAction, TopHeadlinesVars>(
	({ country }) => ({
		country
	})
)

export const testEpic: Epic<any, RootState> = (action$, store) =>
	action$
		.ofType<ArticleTopHeadlinesRequestAction>(
			ArticleActions.requestTopHeadlines
		)
		.pipe(mapRequest$)
		/*.pipe(
			map(action => {
				console.log(topHeadlinesQuery)
				return {
					type: 'FAKE_ACTION'
				}
			})
		)*/
		.pipe(
			switchMap(request =>
				query<GraphqlData<{}>, TopHeadlinesVars>(topHeadlinesQuery, request)
					.pipe(map(response => {
						console.log('response!', response)
						return ({
							type: 'FAKE_ACTION'
						})
					}))
					.pipe(catchError(error => of(rejectArticles(error))))
					.pipe(takeUntil(action$.ofType<ArticleCancelAction>()))
			)
		)

export default combineEpics(requestTopHeadlinesEpic, testEpic)
