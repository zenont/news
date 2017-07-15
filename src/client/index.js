import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

const app = document.getElementById('app')
const root =
	<Provider store={store}>
		<App />
	</Provider>

render(root, app)
