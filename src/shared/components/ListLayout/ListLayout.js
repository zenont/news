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
		const { sources } = this.props
		const options = sources.map(source => {
			const { id, name } = source
			return (<option key={id} value={id}>{name}</option>)
		})

		return (
			<select name="" id="" onChange={e => this.handleChange(e)}>
				{options}
			</select>
		)
	}
}
SourceDropdown.displayName = 'SourceDropdown'
SourceDropdown.propTypes = {
	sources: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired
}
SourceDropdown.defaultProps = {
	sources: [],
	onChange: noop,
}

export class ListLayout extends Component {
	handleOnSourceDropdowned(source) {
		const { onSourceChanged } = this.props
		onSourceChanged(source)
	}

	render() {
		const { articles, sources } = this.props

		return (
			<div>
				ListLayout
				<SourceDropdown
					sources={sources}
					onChange={(source) => this.handleOnSourceDropdowned(source)}
				/>
				<ul>
					{articles.map((article, index) => {
						const { id, summary } = article
						return (
							<li key={id}>
								<Link to={`/news/${id}`}>{summary}</Link>
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
	onSourceChanged: PropTypes.func.isRequired,
}
ListLayout.defaultProps = {
	articles: [],
	sources: [],
	onSourceChanged: noop,
}

export default withRouter(ListLayout)
