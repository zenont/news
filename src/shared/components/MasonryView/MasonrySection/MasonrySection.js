import './masonrySection.scss'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const noop = () => { }

export class MasonrySection extends Component {
	render() {
		const { article } = this.props
		if (!article) return null

		const { title, description, url, urlToImage } = article

		return (
			<section className="masonry-section">
				<a className="masonry-section-url" href={url} target="_blank">
					<img src={urlToImage} />
					<h2>{title}</h2>
					<p>
						{description}
					</p>
				</a>
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
