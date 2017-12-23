
import React, { Props, StatelessComponent } from 'react'
import { ICountrySelectorProps } from './interfaces'
import Options from './Options'

const noop = () => { }

const Selector: StatelessComponent<ICountrySelectorProps> = ({ options, selected, onChange }) => {
	return (
		<select value={selected} onChange={(event) => onChange != null ? onChange(event.target.value) : noop()}>
			<Options options={options} />
		</select>
	)
}

Selector.displayName = 'Selector'
Selector.defaultProps = {
	onChange: noop,
}

export default Selector
