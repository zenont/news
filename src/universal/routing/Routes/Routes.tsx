import React, { StatelessComponent } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { DetailContainer, ListContainer } from '../../containers'

export interface IRoutesProps {

}

// tslint:disable-next-line:variable-name
export const Routes: StatelessComponent<IRoutesProps> = () => (
	<Switch>
		<Route exact path="/" component={ListContainer} />
		<Route exact path="/news" component={ListContainer} />
		<Route exact path="/news/:articleId" component={DetailContainer} />
	</Switch>
)

Routes.displayName = 'Routes'
Routes.propTypes = {

}

export default Routes
