import 'rxjs/add/operator/map'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs'
import { stringify } from 'query-string'
import urlJoin from 'url-join'
import { config } from './config'
import { EverythingRequest } from './request'
import { IAjaxArticleResponse, IAjaxErrorResponse } from './response'
/*
var query = `query RollDice($dice: Int!, $sides: Int) {
	rollDice(numDice: $dice, numSides: $sides)
  }`;
  xhr.send(JSON.stringify({
	query: query,
	variables: { dice: dice, sides: sides },
  }));
*/
export function fetchEverything(
	request: EverythingRequest
): Observable<IAjaxArticleResponse | IAjaxErrorResponse> {
	const { apiKey, apiUrl } = config
	const query = stringify({
		...request,
		apiKey
	})
	const url = `${urljoin(apiUrl, 'everything')}?${query}`
	return ajax.getJSON<IAjaxArticleResponse | IAjaxErrorResponse>(url)
}
