import {
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
  POSTS_LIST_FAIL,
} from "../constants/journalConstants"

export const productListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POSTS_LIST_REQUEST:
      return { loading: true, posts: [] }
    case POSTS_LIST_SUCCESS:
      return { loading: false, posts: action.payload }
    case POSTS_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
