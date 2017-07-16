import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom'
import ListContainer from './ListContainer'
import DetailContainer from './DetailContainer'

export class AppContainer extends Component {
	render() {
		return (
			<Router>
				<div>
					This is an AppContainer
					<Switch>
						<Route exact path="/" component={ListContainer} />
						<Route path="/:articleId" component={DetailContainer} />
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