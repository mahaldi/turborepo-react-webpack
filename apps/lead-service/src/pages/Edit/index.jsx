import React, {useEffect} from 'react';
import { Button } from 'commons/Components';
import { Checkpoints } from 'commons/Utils';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComment, commentSelector } from 'commons/Slices';
import PropTypes from 'prop-types';
import {get} from 'lodash'

const EditLead = (props) => {
	const {history, match} = props
	const id = get(match, 'params.id')
	const dispatch = useDispatch()
	const {loading: loadingComment, comment: commentDetail} = useSelector(commentSelector)

	useEffect(() => {
		if(id)
			dispatch(fetchComment(id))
	}, [])

	const handleSubmit = () => {
		dispatch(fetchComment(id)).then(res => {
			if(res)
				history.push({
					pathname: Checkpoints.leadList
				})
		})
	}
	return (
		<div>
			<h1>Page Edit lead</h1>
			{
				loadingComment ? <h1>Loading</h1> : <div>
					<h3>name</h3>
					<input defaultValue={commentDetail.name}/>
					<h5>body</h5>
					<input defaultValue={commentDetail.body}/>
				</div>
			}
			<Button onClick={handleSubmit}>Submit</Button>
		</div>
	)
}
EditLead.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	match: PropTypes.shape({}).isRequired,
}
export default EditLead
