import { Props } from 'react'

export interface IOption {
	id: string
	display: string
}

export interface IOptionsProps {
	readonly options: IOption[]
}

export interface ICountrySelectorProps extends Props<{}> {
	readonly options: IOption[]
	readonly selected: string
	readonly onChange?: (selected: string) => void
}
