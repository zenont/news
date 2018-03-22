import React, { ClassAttributes, Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
import es from 'react-intl/locale-data/es'
import Router, { Routes } from '../../routing'
import store from '../../state'

export interface IRootContainerProps extends ClassAttributes<HTMLDivElement> {

}

export class RootContainer extends Component<IRootContainerProps> {
	public render() {
		return (
			<div className="news-root-container">
				<Provider store={store}>
					<IntlProvider locale="en">
						<div>
							<Router context={this.context} server={false} location="">
								<Routes />
							</Router>
						</div>
					</IntlProvider>
				</Provider>
			</div>
		)
	}
}

export default RootContainer
