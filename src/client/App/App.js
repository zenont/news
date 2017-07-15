import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class App extends Component {
	render() {
		return (<div>app lol!</div>)
	}
}

App.displayName = 'App'
App.propTypes = {
	name: PropTypes.string.isRequired
}

export default App
