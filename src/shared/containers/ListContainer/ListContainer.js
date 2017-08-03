import React, { Component } from 'react'
import PropTypes from 'prop-types'
import connect from './selectors'
import { ListLayout, NewsView } from '../../components'

const noop = () => { }

export class ListContainer extends Component {
	componentDidMount() {
		const { onLoad } = this.props
		onLoad()
	}

	render() {
		const { articles, categories } = this.props
		return (
			<ListLayout>
				List Container
				<NewsView categories={categories} articles={articles} />
			</ListLayout>
		)
	}
}

ListContainer.displayName = 'ListContainer'
ListContainer.propTypes = {
	articles: PropTypes.array.isRequired,
	categories: PropTypes.array.isRequired,
	onLoad: PropTypes.func.isRequired,
}
ListContainer.defaultProps = {
	articles: [],
	categories: [],
	onLoad: noop,
}

export default connect(ListContainer)
