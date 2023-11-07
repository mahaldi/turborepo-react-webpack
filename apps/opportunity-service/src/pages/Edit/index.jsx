import React, {useEffect} from 'react';
import { Button } from 'commons/Components';
import { Checkpoints } from 'commons/Utils';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPost, postSelector } from 'commons/Slices';
import PropTypes from 'prop-types';
import {get} from 'lodash'

const EditOppty = (props) => {
	const {history, match} = props
	const id = get(match, 'params.id')
	const dispatch = useDispatch()
	const {loading: loadingPost, post: postDetail} = useSelector(postSelector)

	useEffect(() => {
		if(id)
			dispatch(fetchPost(id))
	}, [])

	const handleSubmit = () => {
		dispatch(fetchPost(id)).then(res => {
			console.log('res', res)
			if(res)
				history.push({
					pathname: Checkpoints.opptyList
				})
		})
	}
	return (
		<div>
			<h1>Page Edit oppty</h1>
			{
				loadingPost ? <h1>Loading</h1> : <div>
					<h3>Title</h3>
					<input defaultValue={postDetail.title}/>
					<h5>body</h5>
					<input defaultValue={postDetail.body}/>
				</div>
			}
			<Button onClick={handleSubmit}>Submit</Button>
		</div>
	)
}
EditOppty.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	match: PropTypes.shape({}).isRequired,
}
export default EditOppty
