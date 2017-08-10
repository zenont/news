import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import { ListContainer, DetailContainer } from '../../containers'

const RouteWithPayload = () => {

}

export const Routes = ({ url }) => (
	<Switch>
		<Route exact path="/" component={ListContainer} />
		<Route exact path="/news" component={ListContainer} />
		<Route exact path="/news/:articleId" component={DetailContainer} />
	</Switch>
)

Routes.displayName = 'Routes'
Routes.propTypes = {
	url: PropTypes.string
}

export default Routes
