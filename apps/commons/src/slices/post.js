/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import api from '../api'

const initialState = {
    loading: false,
    error: false,
    post: {},
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getPost: state => {
            state.loading = true
        },
        getPostSuccess: (state, { payload }) => {
            state.post = payload
            state.loading = false
            state.error = false
        },
        getPostFailure: state => {
            state.loading = false
            state.error = true
        },
    },
})

export const { getPost, getPostSuccess, getPostFailure } = postSlice.actions
export const postSelector = state => state.post
export default postSlice.reducer

export const fetchPost = (id) => async (dispatch) => {
  dispatch(getPost())
	try {
			const { data } = await api.get(`/posts/${id}`)

			dispatch(getPostSuccess(data))
	} catch (error) {
			dispatch(getPostFailure())
	}
}
