import React, { ClassAttributes, Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { mapDispatchToProps, mapStateToProps } from './mapping'
import { IListContainerDispatchProps, IListContainerProps, IListContainerStateProps, ListContainerPropsType } from './types'
import { RootState } from '../../state'
import { NavBar } from '../../components'

export class ListContainer extends Component<ListContainerPropsType> {
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

export default connect<IListContainerStateProps, IListContainerDispatchProps, IListContainerProps, RootState>
	(mapStateToProps, mapDispatchToProps)(ListContainer)
