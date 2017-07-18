import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

export class ListLayout extends Component {
	render() {
		const { articles } = this.props

		return (
			<div>
				ListLayout
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
}
ListLayout.defaultProps = {
	articles: []
}

export default withRouter(ListLayout)
