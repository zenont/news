import React from 'react'
import { render } from 'react-dom'
import store from '../shared/store'
import RootContainer from '../shared/containers'
import { AppContainer } from 'react-hot-loader'
import '../shared/assets/favicon.ico'

const app = document.getElementById('app')
/*
render(
	<AppContainer>
		<RootContainer server={false} store={store} />
	</AppContainer>
	, app)
*/

const hotRender = Component => {
	render(
		<AppContainer>
			<Component server={false} store={store}/>
		</AppContainer>,
		app
	)
}

hotRender(RootContainer)

// hot module replacement
/*
if (process.env.NODE_ENV === 'development' && module.hot) {
	module.hot.accept('../shared/containers', () => {
		const NewApp = require('../shared/containers').default
		render(<NewApp />, document.getElementById('app'))
	})
}
*/
if (module.hot) {
	module.hot.accept('../shared/containers', () => { hotRender(RootContainer) })
}
