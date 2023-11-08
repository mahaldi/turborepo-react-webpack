import React from 'react';
import {Checkpoints} from 'commons/Utils'
import { Link, useHistory } from "react-router-dom";
import classes from './sidebar.scss'

import 'commons/Styles'

const Sidebar = () => {
	const history = useHistory()

	const handleLogout = () => {
		const isHasIdentity = localStorage.getItem('identity')
		if(isHasIdentity) {
			localStorage.removeItem('identity')
			history.push(Checkpoints.home)
		}
	}
	return (
		<div className={classes.sidebar}>
			<ul>
				<li>
					<Link to={Checkpoints.opptyList}>Oppty Service</Link>
				</li>
				<li>
					<Link to={Checkpoints.leadList}>Lead Service</Link>
				</li>
				<li>
					<button type='button' onClick={handleLogout}>Logout</button>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar;
