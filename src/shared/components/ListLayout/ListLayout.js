import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

const noop = () => { }

export class SourceDropdown extends PureComponent {
	handleChange({ target }) {
		const { onChange } = this.props
		const { value } = target
		onChange(value)
	}

	render() {
		const { sources, value } = this.props
		const options = sources.map(source => {
			const { id, name } = source
			return (<option key={id} value={id}>{name}</option>)
		})

		return (
			<select value={value} onChange={e => this.handleChange(e)}>
				{options}
			</select>
		)
	}
}
SourceDropdown.displayName = 'SourceDropdown'
SourceDropdown.propTypes = {
	sources: PropTypes.array.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
}
SourceDropdown.defaultProps = {
	sources: [],
	onChange: noop,
	value: 'cnn'
}

export class ListLayout extends Component {
	handleOnSourceDropdowned(source) {
		const { onSourceChanged } = this.props
		onSourceChanged(source)
	}

	render() {
		const { articles, sources, selectedSource } = this.props

		return (
			<div>
				ListLayout
				<SourceDropdown
					sources={sources}
					value={selectedSource}
					onChange={(source) => this.handleOnSourceDropdowned(source)}
				/>
				<ul>
					{articles.map((article, index) => {
						const { title } = article
						return (
							<li key={title}>
								<Link to={`/news/${title}`}>{title}</Link>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

ListLayout.displayName = 'ListLayout'
ListLayout.propTypes = {
	articles: PropTypes.array.isRequired,
	sources: PropTypes.array.isRequired,
	selectedSource: PropTypes.string.isRequired,
	onSourceChanged: PropTypes.func.isRequired,
}
ListLayout.defaultProps = {
	articles: [],
	sources: [],
	selectedSource: 'cnn',
	onSourceChanged: noop,
}

export default withRouter(ListLayout)
