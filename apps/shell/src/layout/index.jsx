import React from "react";
import PropTypes from 'prop-types'
import classes from './style.scss'

const Layout = ({children}) => (
	<div className={classes.container}>
		{children}
	</div>
)
Layout.propTypes = {
	children: PropTypes.node.isRequired
}
export default Layout
