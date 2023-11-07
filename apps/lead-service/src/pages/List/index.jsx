import React, {useEffect, useState} from "react";
import {Button} from 'commons/Components'
import PropTypes from 'prop-types';
import { Checkpoints } from 'commons/Utils';
import { fetchComments, commentsSelector } from 'commons/Slices';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Landing = () => {

	const dispatch = useDispatch();
	const [page, setPage] = useState(0)

	const {loading: loadingComments, comments: commentList = []} = useSelector(commentsSelector)

	useEffect(() => {
		dispatch(fetchComments({start: page}))
	}, [])

	const handlePage = (isNext) => {
		const nextPage = isNext ? page + 1 : page - 1
		dispatch(fetchComments({
			start: nextPage
		}))
		setPage(nextPage)
	};
  return (
    <div>
			<h1>Lead List Page</h1>
			{
				loadingComments ? <h1>loading...</h1> : <div>
					{commentList.map(item => (
						<li key={item.id}>
							<Link to={Checkpoints.leadDetail.replace(':id', item.id)}>{item.name}</Link>
						</li>
					))}
					<Button onClick={() => handlePage(true)}>Next page</Button>
					<Button disabled={page === 0} onClick={handlePage}>Before Page</Button>
				</div>
			}
    </div>
  )
}
Landing.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func,
	}).isRequired,
}
export default Landing;
