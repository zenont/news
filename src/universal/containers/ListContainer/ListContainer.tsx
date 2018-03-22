import React, { ClassAttributes, Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../../components'

export interface IListContainerProps extends ClassAttributes<HTMLDivElement> {

}

export class ListContainer extends Component<IListContainerProps> {
	public render() {

		return (
			<Fragment>
				<div className="news-list-container">
					list!!
					<Link to="/news/23232">
						go to details!
					</Link>
				</div>
				<NavBar test="list portal!" />
			</Fragment>
		)
	}
}

export default ListContainer
