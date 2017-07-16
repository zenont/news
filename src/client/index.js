import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import AppContainer from './AppContainer'

const app = document.getElementById('app')
const root =
	<Provider store={store}>
		<AppContainer />
	</Provider>

render(root, app)
