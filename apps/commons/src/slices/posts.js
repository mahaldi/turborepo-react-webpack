/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import api from '../api'

const initialState = {
  loading: false,
  error: false,
  posts: [],
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: state => {
      state.loading = true
    },
    getPostsSuccess: (state, { payload }) => {
      state.posts = payload
      state.loading = false
      state.error = false
    },
    getPostsFailure: state => {
      state.loading = false
      state.error = true
    },
  },
})

export const { getPosts, getPostsSuccess, getPostsFailure } = postsSlice.actions
export const postsSelector = state => state.posts
export default postsSlice.reducer

export const fetchPosts = ({start = 0, limit = 10}) => async (dispatch) => {
  dispatch(getPosts())
	try {
		const {data} = await api.get(`/posts?_start=${start}&_limit=${limit}`)
		dispatch(getPostsSuccess(data))
		return data
	} catch (error) {
		dispatch(getPostsFailure())
		return error
	}
}
