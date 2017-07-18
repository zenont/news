import React from 'react'
import { render } from 'react-dom'
import store from './store'
import RootContainer from './containers'

const app = document.getElementById('app')
render(<RootContainer server={false} store={store} />, app)
