import React from 'react'
import { render } from 'react-dom'
import store from '../shared/store'
import RootContainer from '../shared/containers'
import { AppContainer } from 'react-hot-loader'
import '../shared/assets/favicon.ico'

const app = document.getElementById('app')

const hotRender = Component => {
	render(
		<AppContainer>
			<Component server={false} store={store} />
		</AppContainer>,
		app
	)
}

hotRender(RootContainer)

if (module.hot) {
	module.hot.accept('../shared/containers', () => hotRender(RootContainer))
}
