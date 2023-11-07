import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { getDetailPostRQ, updatePostRQ } from 'components/Slices';
import { useParams } from 'react-router-dom';

const DetailPost = ({ client, history }) => {
	const { postId: id } = useParams();
	const postId = +id;

	// get detail post
	const { data, isLoading, isError } = useQuery(
		[ 'detailPost', postId ], // queryKey
		() => getDetailPostRQ(postId), // queryFn
		{
			// Here you can add options like retries, refetch interval, etc.
			staleTime: 1000 * 60 * 1, // Data dianggap fresh selama 1 menit
			retry: 2, // retry fetch max 2 times if failed
			onSuccess: (data) => {
				console.log('Data Detail fetched successfully:', data);
			},
			onError: (error) => {
				console.error('Error fetching data:', error);
			}
		}
	);

	// edit post
	const [ editFormData, setEditFormData ] = useState({
		title: '',
		author: ''
	});

	// const { mutate: updatePost } = useMutation(updatePostRQ, {
	// 	onSuccess: (updatedData) => {
	// 		// if we want the UI immediately updated without refetch from server, use setQueryData to update cache manually with new data
	// 		// Assumption `updatedData` is post data updated from the server
	// 		client.setQueryData([ 'detailPost', postId ], updatedData);

	// 		// client.invalidateQueries([ 'posts' ]);
	// 		// history.push('/');
	// 	},
	// 	onError: (error) => {
	// 		alert(error.message);
	// 	}
	// });

	// edit post to prevent failed updating data
	const { mutate: updatePost } = useMutation(updatePostRQ, {
		onMutate: async (newData) => {
			await client.cancelQueries([ 'detailPost', postId ]);
			// Snapshot data before mutation
			let previousData = client.getQueryData([ 'detailPost', postId ]);
			// Optimistically update to the new value
			client.setQueryData([ 'detailPost', postId ], {
				...previousData,
				...newData
			});

			// Return a context object with the snapshotted value
			return { previousData };
		},
		onError: (err, newData, context) => {
			// If the mutation fails, use the context returned from onMutate to rollback
			client.setQueryData([ 'detailPost', postId ], context.previousData);
		},
		onSettled: () => {
			// Setelah mutasi selesai atau jika gagal, refetch detailPost
			client.invalidateQueries([ 'detailPost', postId ]);
		}
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setEditFormData({
			...editFormData,
			[name]: value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		updatePost({ ...editFormData, id: postId });
	};

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error: {isError.message}</span>;
	}

	return (
		<div>
			<h1>DETAIL POST PAGE with Id: {data.id}</h1>
			<p>Author: {data.author}</p>
			<p>Title: {data.title}</p>

			<div>
				<h4>EDIT THIS POST:</h4>
				<form onSubmit={handleSubmit} id="edit-post-form">
					<label htmlFor="author">Author:</label>
					<input
						id="author"
						name="author"
						type="text"
						value={editFormData.author}
						onChange={handleInputChange}
					/>
					<br />
					<label htmlFor="title">Title:</label>
					<input
						id="title"
						name="title"
						type="text"
						value={editFormData.title}
						onChange={handleInputChange}
					/>
					<br />
					<button type="submit">Update Post</button>
				</form>
			</div>
		</div>
	);
};

export default DetailPost;
