import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

const noop = () => { }

export class MasonrySection extends Component {
	render() {
		const { article } = this.props
		if (!article) return null

		const { title, description, urlToImage } = article

		return (
			<section>
				<img src={urlToImage} />
				<h2>{title}</h2>
				<p>
					{description}
				</p>
			</section>
		)
	}
}

MasonrySection.displayName = 'MasonrySection'
MasonrySection.propTypes = {
	article: PropTypes.object.isRequired,
	onLoad: PropTypes.func.isRequired,
}
MasonrySection.defaultProps = {
	onLoad: noop,
}

export default MasonrySection
