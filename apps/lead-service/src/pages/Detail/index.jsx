import React, {useEffect} from "react";
import { Button } from 'commons/Components';
import { Checkpoints } from 'commons/Utils';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComment, commentSelector } from 'commons/Slices';
import PropTypes from 'prop-types';
import {get} from 'lodash'

const DetailLead = (props) => {
	const {history, match} = props
	const id = get(match, 'params.id')
	const dispatch = useDispatch()
	const {loading: loadingComment, comment: commentDetail} = useSelector(commentSelector)

	useEffect(() => {
		if(id)
			dispatch(fetchComment(id))
	}, [])

	const directEdit = () => {
		history.push({
			pathname: Checkpoints.leadEdit.replace(':id', id)
		})
	}
	return (
		<div>
			<h1>Page Detail Lead</h1>
			{
				loadingComment ? <h1>Loading...</h1> : <div>
					<h3>name</h3>
					<p>{commentDetail.name}</p>
					<h4>Body</h4>
					<p>{commentDetail.body}</p>
					<Button onClick={directEdit}>Edit Lead</Button>
				</div>
			}
		</div>
	)
}

DetailLead.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func,
	}).isRequired,
	match: PropTypes.shape({}).isRequired,
}
export default DetailLead;
