
import React, { StatelessComponent, Fragment } from 'react'
import { IOptionsProps } from './interfaces'

const Options: StatelessComponent<IOptionsProps> = ({ options }) => {
	const array = options.map(option => {
		const { id, display } = option
		return (<option key={id} value={id}>{display}</option>)
	})

	return (
		<Fragment>
			{array}
		</Fragment>
	)
}

Options.displayName = 'Options'
export default Options
