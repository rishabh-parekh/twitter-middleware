import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import comments from "./commentsReducer"
import posts from "./postsReducer"
import header from "./headerReducer"

export default combineReducers({
  tweets,
  comments,
  posts,
  header
})
