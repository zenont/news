import React, { Component } from 'react'
import PropTypes from 'prop-types'
import connect from './selectors'
import { ListLayout, MasonryView } from '../../components'

const noop = () => { }

export class ListContainer extends Component {
	componentDidMount() {
		const { onLoad } = this.props
		onLoad()
	}

	render() {
		const { topHeadlines, categories } = this.props
		return (
			<ListLayout>
				List Container
				<MasonryView articles={topHeadlines} />
			</ListLayout>
		)
	}
}

ListContainer.displayName = 'ListContainer'
ListContainer.propTypes = {
	topHeadlines: PropTypes.array.isRequired,
	categories: PropTypes.array.isRequired,
	onLoad: PropTypes.func.isRequired,
}
ListContainer.defaultProps = {
	topHeadlines: [],
	categories: [],
	onLoad: noop,
}

export default connect(ListContainer)
