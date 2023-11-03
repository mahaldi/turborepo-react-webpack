import { createSlice } from '@reduxjs/toolkit'
import api from '../api'

const initialState = {
    loading: false,
    error: false,
    comments: [],
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
      getComments: state => {
        state.loading = true
      },
      getCommentsSuccess: (state, { payload }) => {
        state.comments = payload
        state.loading = false
        state.error = false
      },
      getCommentsFailure: state => {
        state.loading = false
        state.error = true
      },
    },
  })

  export const {
    getComments,
    getCommentsSuccess,
    getCommentsFailure,
  } = commentsSlice.actions
export const commentsSelector = state => state.comments
export default commentsSlice.reducer

export const fetchComments = (postId) => {
	return async dispatch => {
		dispatch(getComments())
        try {
           const {data} = await api.get(`/comments?postId=${postId}`)
           dispatch(getCommentsSuccess(data))
        } catch(err) {
            dispatch(getCommentsFailure())
        }
	}
}