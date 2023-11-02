import { combineReducers } from 'redux'
import commentsReducer from './comments'
import post from './post'
import posts from './posts'

export const rootReducer = combineReducers({
  comments: commentsReducer,
  post,
  posts
})