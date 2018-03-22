import React, { ClassAttributes, Component } from 'react'

export interface IListContainerProps extends ClassAttributes<HTMLDivElement> {

}

export class ListContainer extends Component<IListContainerProps> {
	public render() {

		return (
			<div className="news-list-container">
				list!!
			</div>
		)
	}
}

export default ListContainer
