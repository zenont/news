import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { createSelector } from 'reselect'
import { setCountry, setLanguage, requestSources } from '../../store/source/actions'

const selector = createSelector(
	store => store.source.getIn(['language', 'selected']),
	store => store.source.getIn(['language', 'options']).toArray(),
	store => store.source.getIn(['country', 'selected']),
	store => store.source.getIn(['country', 'options']).toArray(),
	(selectedLang, langOptions, selectedCountry, countryOptions) => {
		return {
			selectedLang,
			langOptions,
			selectedCountry,
			countryOptions
		}
	}
)

export const mapStateToProps = (store) => {
	return selector(store)
}

export const mapDispatchToProps = (dispatch) => {
	return {
		onCountryChanged: (country) => {
			dispatch(setCountry(country))
			dispatch(requestSources())
		},
		onLanguageChanged: (language) => {
			dispatch(setLanguage(language))
			dispatch(requestSources())
		}
	}
}

export default (component) => withRouter(connect(mapStateToProps, mapDispatchToProps)(component))
