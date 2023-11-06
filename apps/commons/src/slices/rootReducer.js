import { combineReducers } from 'redux'
import commentsReducer from './comments'
import post from './post'
import posts from './posts'

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
  comments: commentsReducer,
  post,
  posts
})
