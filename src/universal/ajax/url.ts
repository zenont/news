import { stringify } from 'query-string'
import urlJoin from 'url-join'

export class Url {
	public static of(url: string): Url {
		return new Url(url)
	}
	private _routes: string[] = []
	private _query: object = {}
	constructor(private _baseUrl: string) {

	}

	public route(...routes: string[]): Url {
		this._routes.push(...routes)
		return this
	}

	public query(param: object): Url {
		this._query = {
			...this._query,
			...param
		}

		return this
	}

	public stringify(): string {
		const url: string = urlJoin(this._baseUrl, ...this._routes)
		const query: string = this._query != null ? stringify(this._query) : ''
		if (query == null || query.length <= 0) {
			return url
		}

		return `${url}?{query}`
	}
}
