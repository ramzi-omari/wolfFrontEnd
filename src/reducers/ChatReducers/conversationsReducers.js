import {
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_REQUEST,
  GET_CONVERSATIONS_FAIL,
} from "../../constants/ChatConstants/conversationConstants"
import { USER_LOGOUT } from "../../constants/userConstants"

export const conversationsListReducer = (
  state = { conversations: {} },
  action
) => {
  switch (action.type) {
    case GET_CONVERSATIONS_REQUEST:
      return { ...state, loading: true }
    case GET_CONVERSATIONS_SUCCESS:
      return { loading: false, conversations: action.payload }
    case GET_CONVERSATIONS_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return { conversations: {} }
    default:
      return state
  }
}
