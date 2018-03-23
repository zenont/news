import React, { ClassAttributes, Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { mapDispatchToProps, mapStateToProps } from './mapping'
import { IListContainerDispatchProps, IListContainerProps, IListContainerStateProps, ListContainerPropsType } from './types'
import { RootState } from '../../state'
import { NavBar } from '../../components'

export class ListContainer extends Component<ListContainerPropsType> {
	public componentDidMount() {
		const { onLoad } = this.props
		onLoad()
	}

	public componentWillUnmount(){
		const { onUnload } = this.props
		onUnload()
	}

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

export default withRouter(connect<IListContainerStateProps, IListContainerDispatchProps, IListContainerProps, RootState>
	(mapStateToProps, mapDispatchToProps)(ListContainer))
