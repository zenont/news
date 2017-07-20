import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import styles from './detailLayout.scss'
import { Link } from 'react-router-dom'

export class DetailLayout extends Component {
	handleOnClick(e) {
		const { history } = this.props
		history.push('/news')
	}

	render() {
		const { article } = this.props

		return (
			<div className={styles.detailLayout}>
				DetailLayout
				<div>{
					article ? <div>{article.id}</div> : <div>Article not found!</div>
				}
				</div>
				<button onClick={(e) => this.handleOnClick(e)}>Just go back!</button>
			</div>
		)
	}
}

DetailLayout.displayName = 'DetailLayout'
DetailLayout.propTypes = {
	article: PropTypes.object,
}
DetailLayout.defaultProps = {
	article: null
}

export default withRouter(DetailLayout)
