import './masonrySection.scss'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const noop = () => { }

export class MasonrySection extends Component {
	handleOnClick(url) {
		window.open(url, '_blank')
	}

	render() {
		const { article } = this.props
		if (!article) return null

		const { title, description, url, urlToImage } = article

		return (
			<div className="masonry-section" onClick={() => this.handleOnClick(url)}>
				<img className="masonry-section-image" src={urlToImage} />
				<div className="masonry-section-footer">
					<h2>{title}</h2>
					<p>
						{description}
					</p>
				</div>
			</div>
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
