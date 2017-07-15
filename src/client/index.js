import React, { render } from 'react'
import store from './store'
import App from './App'

const app = document.getElementById('app')
const root = (
	<Provider store={store}>
		<App />
	</Provider>
)

render(root, app)
