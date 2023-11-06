import React, {useEffect} from "react";
import PropTypes from 'prop-types'
import { useLocation, useHistory } from 'react-router-dom'
import { Checkpoints } from 'commons/Utils';
import classes from './layout.scss'
import Sidebar from "../components/Sidebar";

const Layout = ({children}) => {
	const location = useLocation()
	const history = useHistory()
	const {pathname} = location
	const isHome = pathname === Checkpoints.home

	useEffect(() => {
		const isHasIdentity = localStorage.getItem('identity')

		if(pathname === Checkpoints.home && isHasIdentity) {
			history.push(Checkpoints.opptyList)
		}
		if(!isHasIdentity && pathname !== Checkpoints.home) {
			history.push(Checkpoints.home)
		}
	},[location])

	return (
		<div className={classes.container}>
			{
				!isHome ? (
					<>
						<Sidebar />
						{children}
					</>
				) : <div>{children}</div>
			}
		</div>
	)
}
Layout.propTypes = {
	children: PropTypes.node.isRequired
}
export default Layout
