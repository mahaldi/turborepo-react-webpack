import React, {useEffect} from 'react';
import { Button } from 'commons/Components';
import { Checkpoints } from 'commons/Utils';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost, postSelector } from 'commons/Slices';
import PropTypes from 'prop-types';
import {get} from 'lodash'

const Detail = (props) => {
	const {history, match} = props
	const id = get(match, 'params.id')

	const dispatch = useDispatch()
	const {loading: loadingPost, post: postDetail} = useSelector(postSelector)

	useEffect(() => {
		if(id)
			dispatch(fetchPost(id))
	}, [])

	const directEdit = () => {
		history.push({
			pathname: `${Checkpoints.opptyEdit.replace(':id', id)}`
		})
	}
	return (
		<div>
			<h1>Page Detail Oppty</h1>
			{
				loadingPost ? <h1>Loading...</h1> : <div>
					<h3>Title</h3>
					<p>{postDetail.title}</p>
					<h5>body</h5>
					<p>{postDetail.body}</p>
				</div>
			}
			<Button onClick={directEdit}>Edit Detail oppty</Button>
		</div>
	)
}
Detail.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	match: PropTypes.shape({
		id: PropTypes.number.isRequired
	}).isRequired,
}
export default Detail;
