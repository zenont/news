import { AjaxResponse, Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import { ajax } from 'rxjs/observable/dom/ajax'
import { PayloadType } from './payload'
import { Source } from '../model'

export type SourcePayload = PayloadType & {
	sources: Source[]
}

// language=en&country=us&apiKey=9ed8490dae88488d98020bd516cbfe47
export function fetchSources(language: string = 'en', country: string = 'us'): Observable<SourcePayload> | undefined {
	const apiUrl = process.env.NEWS_API_URL || 'https://newsapi.org/v2/'
	const appKey = process.env.NEWS_API_KEY || '9ed8490dae88488d98020bd516cbfe47'
	return undefined
}
