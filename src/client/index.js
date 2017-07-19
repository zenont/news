import React from 'react'
import { render } from 'react-dom'
import store from '../shared/store'
import RootContainer from '../shared/containers'
import '../shared/assets/favicon.ico'

const app = document.getElementById('app')
render(<RootContainer server={false} store={store} />, app)

// hot module replacement
if (process.env.NODE_ENV === 'development' && module.hot) {
	module.hot.accept('../shared/containers', () => {
		const NewApp = require('../shared/containers').default
		render(<NewApp />, document.getElementById('app'))
	})
}
