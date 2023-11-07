import React, { useState } from 'react';
import { fetchPostRQ, createNewPostRQ } from 'components/Slices';
import { useMutation, useQuery } from 'react-query';
import '../App.css';
import { Link } from 'react-router-dom';
import { deletePostRQ, getDetailPostRQ } from '../../../components/src/slices/posts';

const Landing = (props) => {
	const { client } = props;

	// get data
	const { data: posts, isLoading, isError, status } = useQuery(
		[ 'posts', 12 ], // queryKey
		() => fetchPostRQ(), // queryFn
		{
			// Here you can add options like retries, refetch interval, etc.

			// staleTime: 1000 * 60 * 5, // example: refresh data every 5 mins when re-render
			// refetchInterval: 1000, // Refetch setiap 1 detik

			// refetchOnWindowFocus: true, // turn off automatic refetch when window get focus
			// staleTime: 1,

			retry: 2, // retry fetch max 2 times if failed
			onSuccess: (data) => {
				console.log('Successfully Fetch Posts', data);
			},
			onError: (error) => {
				console.error('Error fetching data:', error);
			},
			placeholderData: [ { id: 'kosong', title: 'kosong', author: 'kosong' } ]
		}
	);

	// if (status === 'loading') return <span>Loading...</span>;
	if (isLoading) return <span>Loading...</span>;

	// if (status === 'error') return <span>Loading...</span>;
	if (isError) return <span>Error: {isError.message}</span>;

	// post data
	const [ formData, setFormData ] = useState({
		title: '',
		author: ''
	});

	const { mutate: createPost } = useMutation(createNewPostRQ, {
		onSuccess: () => {
			// Invalidate and refetch query get posts
			client.invalidateQueries('posts');
		}
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createPost({
			title: formData.title,
			author: formData.author
		});
	};

	// delete data
	const { mutate: doDeletePost } = useMutation(deletePostRQ, {
		onSuccess: () => {
			client.invalidateQueries('posts');
		},
		onError: (error) => {
			alert(error.message);
		}
	});

	const handleDeletePost = (postId) => () => {
		doDeletePost(postId);
	};

	// pre fetch data detail
	const prefetchDataDetail = (postId) => () => {
		client.prefetchQuery([ 'detailPost', postId ], () => getDetailPostRQ(postId));
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="header">
					<div className="text-red">SAFORA LANDING PAGE</div>
				</h1>
				<h3 style={{ textAlign: 'center', width: '100%' }}>List Post</h3>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="author"
						placeholder="Author"
						value={formData.author}
						onChange={handleChange}
						required
					/>
					<input
						type="text"
						name="title"
						placeholder="Title"
						value={formData.title}
						onChange={handleChange}
						required
					/>
					<button type="submit">Create Post</button>
				</form>
				<table id="sfa-table">
					<thead>
						<tr>
							<th>Post ID</th>
							<th>Author</th>
							<th>Title</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{posts.map((post) => (
							<tr key={post.id}>
								<td>{post.id}</td>
								<td>{post.author}</td>
								<td>{post.title}</td>
								<td>
									<div>
										<button onMouseEnter={prefetchDataDetail(post.id)}>
											<Link to={`/safora/post/${post.id}`}>Detail</Link>
										</button>
										<button onClick={handleDeletePost(post.id)}>Delete</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</header>
		</div>
	);
};

export default Landing;
