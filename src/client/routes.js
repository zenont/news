import { Switch, Route } from 'react-router-dom'
import ListContainer from '../ListContainer'
import DetailContainer from '../DetailContainer'

export const Routes = () => (
	<Switch>
		<Route exact path="/" component={ListContainer} />
		<Route exact path="/news" component={ListContainer} />
		<Route exact path="/news/:articleId" component={DetailContainer} />
	</Switch>
)

Routes.displayName = 'Routes'
