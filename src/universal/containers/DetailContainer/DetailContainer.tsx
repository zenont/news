import React, { ClassAttributes, Component } from 'react'

export interface IDetailContainerProps extends ClassAttributes<HTMLDivElement> {

}

export class DetailContainer extends Component<IDetailContainerProps> {
	public render() {

		return (
			<div className="news-detail-container">
				details!!
			</div>
		)
	}
}

export default DetailContainer
