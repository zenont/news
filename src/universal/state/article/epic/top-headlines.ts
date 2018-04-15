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
import { query, GraphqlData } from '../../../ajax'
import { Country, Article } from '../../../model'
import testQueryQl from '../../../graph/queries/test.graphql'
import topHeadlinesQuery from '../../../graph/queries/top-headlines.graphql'

type TopHeadlinesVars = {
	readonly country?: Country
}
type TopHeadLineGraphResponse = {
	readonly headlines: {
		readonly articles: ReadonlyArray<Article>
		readonly total: number
	}
}

const mapRequest$ = map<ArticleTopHeadlinesRequestAction, TopHeadlinesVars>(
	({ country }) => ({
		country
	})
)

const fulfill$ = map<GraphqlData<TopHeadLineGraphResponse>, ArticleAction>(
	({ data }) =>
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
				query<TopHeadLineGraphResponse, TopHeadlinesVars>(
					topHeadlinesQuery,
					request
				)
					.pipe(fulfill$)
					.pipe(catchError(error => of(rejectArticles(error))))
					.pipe(takeUntil(action$.ofType<ArticleCancelAction>()))
			)
		)

export default combineEpics(requestTopHeadlinesEpic)
