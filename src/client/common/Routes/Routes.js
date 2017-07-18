import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ListContainer, DetailContainer } from '../../containers'

export const Routes = () => (
	<Switch>
		<Redirect from="/" to="/home" />
		<Route exact path="/home" component={ListContainer} />
		<Route exact path="/home/news" component={ListContainer} />
		<Route exact path="/home/news/:articleId" component={DetailContainer} />
	</Switch>
)

Routes.displayName = 'Routes'

export default Routes
