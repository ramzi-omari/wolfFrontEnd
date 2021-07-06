import {
  USER_DETAILS_REQUEST,
  USER_DETAILS_FAIL,
  USER_DETAILS_SUCCESS,
} from "../constants/userConstants"
// two parameter , initial state & action
// action which has a type then do multiple thing dependin on the type of action
export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_DETAILS_SUCCESS:
      return { loading: true, users: [] }
    case USER_DETAILS_REQUEST:
      return { loading: false, users: action.payload }
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
