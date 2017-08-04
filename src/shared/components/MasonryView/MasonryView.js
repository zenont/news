import './masonryView.scss'
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
		const { articles } = this.props
		const sections = articles.map(article => {
			const { url } = article
			return (<MasonrySection key={url} article={article}></MasonrySection>)
		})
		return (
			<article className="masonry-view">
				{sections}
			</article>
		)
	}
}

MasonryView.displayName = 'MasonryView'
MasonryView.propTypes = {
	articles: PropTypes.array.isRequired,
	onLoad: PropTypes.func.isRequired,
}
MasonryView.defaultProps = {
	articles: [],
	onLoad: noop,
}

export default MasonryView
