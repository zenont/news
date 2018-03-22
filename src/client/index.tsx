import React from 'react'
import { render } from 'react-dom'
import store from '../universal/state'
import RootContainer from '../universal/containers'
import { AppContainer } from 'react-hot-loader'
import '../universal/assets/favicon.ico'

const app = document.getElementById('app')

// tslint:disable-next-line:variable-name
const hotRender = (Component: any) => {
	render(
		<AppContainer>
			<Component server={false} store={store} />
		</AppContainer>,
		app
	)
}

hotRender(RootContainer)

if (module.hot) {
	module.hot.accept('../universal/containers', () => hotRender(RootContainer))
}
