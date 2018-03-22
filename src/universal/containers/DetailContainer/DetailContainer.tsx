import React, { ClassAttributes, Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../../components'

export interface IDetailContainerProps extends ClassAttributes<HTMLDivElement> {

}

export class DetailContainer extends Component<IDetailContainerProps> {
	public render() {

		return (
			<Fragment>
				<div className="news-detail-container">
					details!!
					<Link to="/news">
						go to list!
					</Link>
				</div>
				<NavBar test="detail portal!" />
			</Fragment>
		)
	}
}

export default DetailContainer
