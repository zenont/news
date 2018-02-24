
export interface IAjaxConfig {
	readonly apiUrl: string
	readonly apiKey: string
}

export const config: IAjaxConfig = {
	apiUrl: process.env.NEWS_API_URL || 'https://newsapi.org/v2/',
	apiKey: process.env.NEWS_API_KEY || '9ed8490dae88488d98020bd516cbfe47'
}

export default config
