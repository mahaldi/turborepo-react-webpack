import React, {useEffect, useState} from 'react';
import { Button } from 'commons/Components';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Checkpoints } from 'commons/Utils';
import { fetchPosts, postsSelector } from 'commons/Slices';
import { useDispatch, useSelector } from 'react-redux';

const List = () => {

	const dispatch = useDispatch();
	const [page, setPage] = useState(0)
	const {loading: loadingPost, posts: postList = []} = useSelector(postsSelector)
	useEffect(() => {
		dispatch(fetchPosts({start: page}))
	}, [])

	const handlePage = (isNext) => {
		const nextPage = isNext ? page + 1 : page - 1
		dispatch(fetchPosts({
			start: nextPage
		}))
		setPage(nextPage)
	};
	return (
		<div>
			<h1>Page List Oppty</h1>
			{
				loadingPost ? <h1>Loading...</h1> : <div>
					{postList.map(item => (
						<li key={item.id}>
							<Link to={Checkpoints.opptyDetail.replace(':id', item.id)}>{item.title}</Link>
						</li>
					))}
				</div>
			}
			<Button onClick={() => handlePage(true)}>Next page</Button>
			<Button disabled={page === 0} onClick={handlePage}>Before page</Button>
		</div>
	);
};

List.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func,
	}).isRequired,
};
export default List;
