import React from "react";
import { useDispatch } from 'react-redux'
import {fetchComments} from 'commons/Slices'
import { Checkpoints } from 'commons/Utils';
import PropTypes from 'prop-types';
import classes from './login.scss'

const LoginPage = ({history}) => {
	const dispatch = useDispatch()

	const handleSubmit = () => {
		dispatch(fetchComments({})).then(res => {
			if(res) {
				localStorage.setItem('identity', res)
				history.push(Checkpoints.opptyList)
			}
		})
	}
	return (
		<div className={classes.container}>
			<h1>login</h1>
			<input type="text" placeholder="username"/>
			<input type="password" placeholder="password"/>
			<button type="button" onClick={handleSubmit}>submit</button>
		</div>
	)
}

LoginPage.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func
	}).isRequired
}
export default LoginPage
