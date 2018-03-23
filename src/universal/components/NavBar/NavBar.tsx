import React, { ClassAttributes, Component, PureComponent, ReactPortal, StatelessComponent } from 'react'
import { createPortal, render } from 'react-dom'

export interface INavBarProps extends ClassAttributes<HTMLDivElement> {
	readonly test?: string
}

export interface INavBarState {
	readonly elem?: HTMLElement | null
}

// tslint:disable-next-line:variable-name
/*
export const NavBar: StatelessComponent<INavBarProps> = ({ children }) => (
	createPortal(children, createDiv())
)*/

export class NavBar extends Component<INavBarProps, INavBarState> {
	constructor(props: INavBarProps) {
		super(props)
		this.state = { }
	}

	public componentDidMount() {
		const elem = document.getElementById('header-container')
		console.log('mounted!')
		this.setState({ elem })
	}

	public render() {
		const { children, test } = this.props
		const { elem } = this.state
		console.log('render!', elem)
		if (elem == null) return null

		return createPortal(
			<div>
				<div>
					{test}
				</div>
				<div>
					{children}
				</div>
			</div>,
			elem)
	}
}

export default NavBar
