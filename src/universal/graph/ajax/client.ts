import { ajax } from 'rxjs/observable/dom/ajax'
import { map } from 'rxjs/operators/map'
import urljoin from 'url-join'
import { stringify } from 'query-string'
import { DocumentNode } from 'graphql'
import { config } from './config'
import { GraphqlData } from './types'
import { AjaxResponse } from 'rxjs'

export const query = <T extends object, K extends object>(
	ql: DocumentNode,
	variables?: K
) => {
	const { apiUrl } = config
	const url = `${urljoin(apiUrl)}?query=${ql}&variables=${JSON.stringify(
		variables
	)}`
	return ajax.getJSON<GraphqlData<T>>(url)
}

export const mutate = <T extends object, K extends object>(
	mutation: DocumentNode,
	variables?: K
) => {
	const { apiUrl } = config
	const body = JSON.stringify({
		mutation,
		variables
	})
	const url = `${urljoin(apiUrl)}`
	return ajax
		.post(url, body)
		.pipe(
			map<AjaxResponse, GraphqlData<T>>(({ response }) => ({ ...response }))
		)
}
