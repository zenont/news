
import React from 'react'
import PropTypes from 'prop-types'

const noop = () => { }

const LanguageSelector = ({ options, selected, onChange }) => {
	const selectOptions = options.map(option => {
		const { id, name } = option
		return (<option key={id} value={id}>{name}</option>)
	})

	return (
		<select value={selected} onChange={(event) => onChange(event.target.value)}>
			{selectOptions}
		</select>
	)
}

LanguageSelector.displayName = 'LanguageSelector'
LanguageSelector.propTypes = {
	options: PropTypes.array.isRequired,
	selected: PropTypes.any,
	onChange: PropTypes.func.isRequired
}
LanguageSelector.defaultProps = {
	onChange: noop,
}

export default LanguageSelector
