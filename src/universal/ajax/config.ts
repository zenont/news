
export interface IAjaxConfig {
	apiUrl: string
	apiKey: string
}

const config: IAjaxConfig = {
	apiUrl: process.env.NEWS_API_URL || 'https://newsapi.org/v2/',
	apiKey: process.env.NEWS_API_KEY || '9ed8490dae88488d98020bd516cbfe47'
}

export default config
