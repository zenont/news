import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

const noop = () => { }

export class MasonrySection extends Component {
	componentDidMount() {
		const { onLoad, category } = this.props
		onLoad(category)
	}

	render() {
		const { category } = this.props
		return (
			<section>
				<p>
					<FormattedMessage id={`category.${category}`} defaultMessage={category} />
				</p>
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
