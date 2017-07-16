import React from 'react'
import PropTypes from 'prop-types'

const Page = (props) => {
	const { children } = props
	return (
		<html>
			<Head />
			<body>
				<div id="container">
					<NavBar />
					<main>
						{children}
					</main>
					<Footer />
				</div>
			</body>
		</html>
	)
}

Page.displayName = 'Page'
Page.propTypes = {
	children: PropTypes.node.isRequired
}

export default Page
