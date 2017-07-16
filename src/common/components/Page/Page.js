import React from 'react'
import PropTypes from 'prop-types'

const Page = (props) => {
	const { title, children } = props
	return (
		<html>
			<head>
				<meta charset="utf-8" />
				<title>{title}</title>
			</head>
			<body>
				<div id="container">
					<div>
						{children}
					</div>
					<footer />
				</div>
			</body>
		</html>
	)
}

Page.displayName = 'Page'
Page.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string.isRequired
}
Page.defaultProps = {
	title: 'News'
}

export default Page
