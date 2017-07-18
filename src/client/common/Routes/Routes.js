import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ListContainer, DetailContainer } from '../../containers'

export const Routes = () => (
	<Switch>
		<Route exact path="/" component={ListContainer} />
		<Route exact path="/news" component={ListContainer} />
		<Route exact path="/news/:articleId" component={DetailContainer} />
	</Switch>
)

Routes.displayName = 'Routes'

export default Routes
