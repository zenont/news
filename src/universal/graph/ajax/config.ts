
export interface IGraphqlApiConfig {
	readonly apiUrl: string
}

const getConfigOrThrow = (key: string, val: string | undefined): string => {
	if (val == null) {
		throw new Error(`Missing config ${key}`)
	}
	return val
}

const apiUrl = getConfigOrThrow('NEWS_API_GRAPH_API_URL', process.env.NEWS_API_GRAPH_API_URL)

export const config: IGraphqlApiConfig = {
	apiUrl,
}

export default config
