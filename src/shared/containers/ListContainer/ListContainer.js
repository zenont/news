import React, { Component } from 'react'
import PropTypes from 'prop-types'
import connect from './selectors'
import { ListLayout } from '../../components'

export class ListContainer extends Component {
	componentDidMount() {
		const { onLoad } = this.props
		onLoad()
	}

	render() {
		const { articles, categories, sourceOptions, selectedSource, onSourceChanged } = this.props
		return (
			<div>
				List Coontainer
				<ListLayout
					articles={articles}
					sources={sourceOptions}
					selectedSource={selectedSource}
					onSourceChanged={onSourceChanged}
				/>
			</div>
		)
	}
}

ListContainer.displayName = 'ListContainer'
ListContainer.propTypes = {
	articles: PropTypes.array.isRequired,
	onSourceChanged: PropTypes.func.isRequired,
	onLoad: PropTypes.func.isRequired,
	sourceOptions: PropTypes.array.isRequired,
	selectedSource: PropTypes.string.isRequired
}
ListContainer.defaultProps = {
	articles: [],
	sourceOptions: []
}

export default connect(ListContainer)
