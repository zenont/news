import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MasonrySection from './MasonrySection'

const noop = () => { }

export class MasonryView extends Component {
	componentDidMount() {
		const { onLoad } = this.props
		onLoad()
	}

	render() {
		const { categories } = this.props
		const sections = categories.map(group => {
			const { category } = group
			console.log('mapping', group, category)
			return (<MasonrySection key={category} ></MasonrySection>)
		})
		return (
			<article>
				{sections}
			</article>
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
