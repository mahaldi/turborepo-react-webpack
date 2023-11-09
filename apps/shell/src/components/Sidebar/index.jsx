import React from 'react';
import {Checkpoints} from 'commons/Utils'
import { useHistory } from "react-router-dom";
import {Button} from 'commons/Components'
import classes from './sidebar.scss'

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
					<Button history={history} variant="link" to={Checkpoints.opptyList}>Oppty Service</Button>
				</li>
				<li>
					<Button history={history} variant="link" to={Checkpoints.leadList}>Lead Service</Button>
				</li>
				<li>
					<Button variant="link" onClick={handleLogout}>Logout</Button>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar;
