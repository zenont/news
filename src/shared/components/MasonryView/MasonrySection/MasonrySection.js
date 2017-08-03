import React, { Component } from 'react'
import PropTypes from 'prop-types'

const noop = () => { }

export class MasonrySection extends Component {
	componentDidMount() {
		const { onLoad } = this.props
		onLoad()
	}

	render() {
		const { category } = this.props
		return (
			<section>
				<p>{category}</p>
			</section>
		)
	}
}

MasonrySection.displayName = 'MasonrySection'
MasonrySection.propTypes = {
	category: PropTypes.string.isRequired,
	onLoad: PropTypes.func.isRequired,
}
MasonrySection.defaultProps = {
	onLoad: noop,
}

export default MasonrySection
