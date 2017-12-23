import React, { Component, Props, Fragment } from 'react'
import { Provider } from 'react-redux'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
import es from 'react-intl/locale-data/es'
import store from '../../state'

export class RootContainer extends Component<Props<{}>> {
	public render() {
		const { children } = this.props

		return (
			<Provider store={store}>
				<IntlProvider locale="en">
					<Fragment>
						{children}
					</Fragment>
				</IntlProvider>
			</Provider>
		)
	}
}

export default RootContainer
