import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IntlProvider, addLocaleData } from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'
import frLocaleData from 'react-intl/locale-data/fr'
import deLocaleData from 'react-intl/locale-data/de'
import { AppLayout, LanguageSelector, CountrySelector } from '../../components'
import messages from '../../i18n'
import connect from './selectors'

addLocaleData([...enLocaleData, ...frLocaleData, ...deLocaleData])
console.log('messages', messages)

export class AppContainer extends Component {
	render() {
		const { children, langOptions, selectedLang, countryOptions, selectedCountry, onCountryChanged, onLanguageChanged } = this.props

		return (
			<IntlProvider locale={selectedLang} key={selectedLang} messages={messages}>
				<AppLayout>
					<LanguageSelector
						options={langOptions}
						selected={selectedLang}
						onChange={onLanguageChanged}
					/>
					<CountrySelector
						options={countryOptions}
						selected={selectedCountry}
						onChange={onCountryChanged}
					/>
					{children}
				</AppLayout>
			</IntlProvider>
		)
	}
}

AppContainer.displayName = 'AppContainer'
AppContainer.propTypes = {
	children: PropTypes.node.isRequired,
	langOptions: PropTypes.array.isRequired,
	selectedLang: PropTypes.string,
	onLanguageChanged: PropTypes.func.isRequired,
	countryOptions: PropTypes.array.isRequired,
	selectedCountry: PropTypes.string,
	onCountryChanged: PropTypes.func.isRequired,
}
AppContainer.defaultProps = {
}

export default connect(AppContainer)
