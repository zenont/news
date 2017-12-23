import 'rxjs/add/operator/map'
import { ajax } from 'rxjs/observable/dom/ajax'
import { AjaxResponse, Observable } from 'rxjs'
import { PayloadType } from './payload'
import { Source } from '../model'
import { Url } from './url'
import config from './config'

export type SourcePayload = PayloadType & {
	sources: Source[]
}

export function fetchSources(language: string = 'en', country: string = 'us'): Observable<SourcePayload> {
	const { apiKey, apiUrl } = config
	const url = Url.of(apiUrl)
		.route('sources')
		.query({ language, country, apiKey })
		.stringify()

	return ajax.getJSON<SourcePayload>(url)
}
