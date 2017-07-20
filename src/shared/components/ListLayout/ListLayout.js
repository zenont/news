import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

export class ListLayout extends Component {
	render() {
		const { articles, sources } = this.props

		const options = sources.map(source => {
			const { id, name } = source
			return (<option key={id} value={id}>{name}</option>)
		})

		return (
			<div>
				ListLayout
				<select name="" id="">
					{options}
				</select>
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
}
ListLayout.defaultProps = {
	articles: [],
	sources: [],
}

export default withRouter(ListLayout)
