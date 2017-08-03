import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AppLayout, LanguageSelector } from '../../components'
import connect from './selectors'

export class AppContainer extends Component {
	render() {
		const { children, langOptions, selectedLang, onLanguageChanged } = this.props

		return (
			<AppLayout>
				<LanguageSelector
					options={langOptions}
					selected={selectedLang}
					onChange={onLanguageChanged}
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
}
AppContainer.defaultProps = {
}

export default connect(AppContainer)
