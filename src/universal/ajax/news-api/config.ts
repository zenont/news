
export interface INewsApiAjaxConfig {
	readonly apiUrl: string
	readonly apiKey: string
}

const getConfigOrThrow = (key: string, val: string | undefined): string => {
	if (val == null) {
		throw new Error(`Missing config ${key}`)
	}
	return val
}

const apiUrl = getConfigOrThrow('NEWS_API_URL', process.env.NEWS_API_URL)
const apiKey = getConfigOrThrow('NEWS_API_KEY', process.env.NEWS_API_KEY)

export const config: INewsApiAjaxConfig = {
	apiUrl,
	apiKey
}

export default config
