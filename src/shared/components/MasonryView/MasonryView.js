import React, { Component } from 'react'
import PropTypes from 'prop-types'

const noop = () => { }

export class MasonryView extends Component {
	componentDidMount() {
		const { onLoad } = this.props
		onLoad()
	}

	render() {
		const { categories } = this.props
		return (
			<ul>
				{categories.map(group => (<li key={group.category}>{group.category}</li>))}
			</ul>
		)
	}
}

MasonryView.displayName = 'MasonryView'
MasonryView.propTypes = {
	articles: PropTypes.array.isRequired,
	categories: PropTypes.array.isRequired,
	onLoad: PropTypes.func.isRequired,
}
MasonryView.defaultProps = {
	articles: [],
	categories: [],
	onLoad: noop,
}

export default MasonryView
