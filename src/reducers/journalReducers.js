import {
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
  POSTS_LIST_FAIL,
} from "../constants/journalConstants"
import { USER_LOGOUT } from "../constants/userConstants"

export const postsListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POSTS_LIST_REQUEST:
      return { loading: true, posts: [] }
    case POSTS_LIST_SUCCESS:
      return { loading: false, posts: action.payload }
    case POSTS_LIST_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return { posts: [] }
    default:
      return state
  }
}
