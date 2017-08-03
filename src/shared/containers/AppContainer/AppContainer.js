import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AppLayout, LanguageSelector, CountrySelector } from '../../components'
import connect from './selectors'

export class AppContainer extends Component {
	render() {
		const { children, langOptions, selectedLang, countryOptions, selectedCountry, onCountryChanged, onLanguageChanged } = this.props

		return (
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
