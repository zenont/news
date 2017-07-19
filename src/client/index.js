import React from 'react'
import { render } from 'react-dom'
import store from '../shared/store'
import RootContainer from '../shared/containers'
import '../shared/assets/favicon.ico'

const app = document.getElementById('app')
render(<RootContainer server={false} store={store} />, app)
