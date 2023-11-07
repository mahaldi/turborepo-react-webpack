import { combineReducers } from 'redux'
import comments from './comments'
import post from './post'
import posts from './posts'
import comment from './comment'

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
  comments,
  post,
  posts,
	comment
})
