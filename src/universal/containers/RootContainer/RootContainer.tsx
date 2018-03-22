import React, { ClassAttributes, Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
import es from 'react-intl/locale-data/es'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import Router, { Routes } from '../../routing'
import store from '../../state'

export interface IRootContainerProps extends ClassAttributes<HTMLDivElement>, RouteComponentProps<{}> {

}

export class RootContainer extends Component<IRootContainerProps> {
	public render() {
		const { location } = this.props
		return (
			<div className="news-root-container">
				<Provider store={store}>
					<IntlProvider locale="en">
						<div>
							<Router context={this.context} server={false} location="">
								<Routes url={location.pathname} />
							</Router>
						</div>
					</IntlProvider>
				</Provider>
			</div>
		)
	}
}

export default withRouter(RootContainer)
