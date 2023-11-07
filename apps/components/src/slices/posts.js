import { createSlice } from '@reduxjs/toolkit';
import api from '../api';

const initialState = {
	loading: false,
	error: false,
	posts: []
};

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		getPosts: (state) => {
			state.loading = true;
		},
		getPostsSuccess: (state, { payload }) => {
			state.posts = payload;
			state.loading = false;
			state.error = false;
		},
		getPostsFailure: (state) => {
			state.loading = false;
			state.error = true;
		}
	}
});

export const { getPosts, getPostsSuccess, getPostsFailure } = postsSlice.actions;
export const postsSelector = (state) => state.posts;
export default postsSlice.reducer;

export const fetchPosts = () => {
	return async (dispatch) => {
		dispatch(getPosts());

		try {
			const { data } = await api.get(`/posts`);
			dispatch(getPostsSuccess(data));
		} catch (error) {
			dispatch(getPostsFailure());
		}
	};
};

// Fetch using React Query
// remove redux thunk logic
// wont need the 'fetchComments' thunk action creator with React Query since it will handle the data fetching logic
export const fetchPostRQ = async () => {
	const { data } = await api.get(`/posts`);
	return data;
};

export const createNewPostRQ = async ({ title, author }) => {
	try {
		const response = await api.post('/posts', { title, author });
		return response.data;
	} catch (error) {
		console.error('Error creating the post', error.response);
		throw error;
	}
};

export const getDetailPostRQ = async (postId) => {
	const { data } = await api.get(`/posts/${postId}`);
	return data;
};

export const updatePostRQ = async ({ id: postId, title, author }) => {
	try {
		const response = await api.put(`/poss/${postId}`, { title, author });
		return response.data;
	} catch (error) {
		console.error('Error updating the post', error.response);
		throw error;
	}
};

export const deletePostRQ = async (postId) => {
	try {
		const response = await api.delete(`/posts/${postId}`);
		return response.data;
	} catch (error) {
		console.error('Error deleting the post', error.response);
		throw error;
	}
};
