import 'rxjs/add/operator/map'
import { ajax } from 'rxjs/observable/dom/ajax'
import { AjaxResponse, Observable } from 'rxjs'
import { StatusType } from './payload'
import { Source } from '../model'
import { Url } from './url'
import config from './config'

type PayloadType = {
	sources: Source[]
}

export type SourcePayloadType = StatusType & PayloadType

export function fetchSources(language: string = 'en', country: string = 'us'): Observable<SourcePayloadType> {
	const { apiKey, apiUrl } = config
	const url = Url.of(apiUrl)
		.route('sources')
		.query({ language, country, apiKey })
		.stringify()

	return ajax.getJSON<SourcePayloadType>(url)
}
