import React, { ClassAttributes, Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { mapDispatchToProps } from './map-dispatch'
import { mapStateToProps } from './map-props'
import { IListContainerDispatchProps, IListContainerProps, IListContainerStateProps, ListContainerPropsType } from './types'
import { RootState } from '../../state'
import { NavBar } from '../../components'

export class ListContainer extends Component<ListContainerPropsType> {
	public componentDidMount() {
		const { onLoad, country } = this.props
		onLoad(country)
	}

	public componentWillUnmount() {
		const { onUnload } = this.props
		onUnload()
	}

	public render() {
		const { articles } = this.props
		return (
			<Fragment>
				<div className="news-list-container">
					list!!
					<Link to="/news/23232">
						go to details!
					</Link>
					<ul>
						{articles.map(a => <li key={a.url + a.title}>{a.title}</li>)}
					</ul>
				</div>
				<NavBar test="list portal!" />
			</Fragment>
		)
	}
}

export default withRouter(connect<IListContainerStateProps, IListContainerDispatchProps, IListContainerProps, RootState>
	(mapStateToProps, mapDispatchToProps)(ListContainer))
