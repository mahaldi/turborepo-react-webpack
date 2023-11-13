import React from "react";
import { Button } from 'commons/Components';
import { Checkpoints } from 'commons/Utils';
import { useGetDetailComment } from 'commons/Hooks';
import PropTypes from 'prop-types';
import { get } from 'lodash'

const DetailLead = (props) => {
	const { history, match } = props;
	const id = get(match, 'params.id');

	const { data: commentDetail, isLoading: loadingComment} = useGetDetailComment(id);

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
