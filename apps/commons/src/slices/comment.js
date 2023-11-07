/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import api from '../api'

const initialState = {
    loading: false,
    error: false,
    comment: [],
}

const commentsSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
      getComment: state => {
        state.loading = true
      },
      getCommentSuccess: (state, { payload }) => {
        state.comment = payload
        state.loading = false
        state.error = false
      },
      getCommentFailure: state => {
        state.loading = false
        state.error = true
      },
    },
  })

  export const {
    getComment,
    getCommentSuccess,
    getCommentFailure,
  } = commentsSlice.actions
export const commentSelector = state => state.comment
export default commentsSlice.reducer

export const fetchComment = (postID) => async (dispatch) => {
	dispatch(getComment())
	try {
			const {data} = await api.get(`/comments?postId=${postID}`)
			dispatch(getCommentSuccess(data[0]))
			return data[0]
	} catch(err) {
			dispatch(getCommentFailure())
			return err
	}
}
