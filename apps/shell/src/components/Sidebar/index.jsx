import React from 'react';
import {Checkpoints} from 'commons/Utils'
import { useHistory } from "react-router-dom";
import {Button} from 'commons/Components'
import { SidebarWrapper } from './style'

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
		<SidebarWrapper>
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
		</SidebarWrapper>
	)
}

export default Sidebar;
