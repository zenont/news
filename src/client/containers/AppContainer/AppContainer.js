import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom'

export class AppContainer extends Component {
	render() {
		return (
			<Router>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/topics">Topics</Link></li>
				</ul>
				<hr />
				<div>
					This is an AppContainer
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/topics" component={Topics} />
					</Switch>
				</div>
			</Router>
		)
	}
}

AppContainer.displayName = 'AppContainer'
AppContainer.propTypes = {
	name: PropTypes.string.isRequired
}

export default AppContainer
