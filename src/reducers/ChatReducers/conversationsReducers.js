import {
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_REQUEST,
  GET_CONVERSATIONS_FAIL,
  SEEN_CONVERSATIONS_REQUEST,
  SEEN_CONVERSATIONS_SUCCESS,
  SEEN_CONVERSATIONS_FAIL,
  ACCEPTE_CONVERSATIONS_REQUEST,
  ACCEPTE_CONVERSATIONS_SUCCESS,
  ACCEPTE_CONVERSATIONS_FAIL,
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

    case SEEN_CONVERSATIONS_REQUEST:
      return { ...state, loading: true }
    case SEEN_CONVERSATIONS_SUCCESS:
      return {
        ...state,
        conversations: {
          ...state.conversations,
          conversation: state.conversations.conversation.map((conversation) =>
            conversation._id === action.payload
              ? {
                  ...conversation,
                  unseen: true ? false : false,
                }
              : conversation
          ),
        },
      }
    case SEEN_CONVERSATIONS_FAIL:
      return { loading: false, error: action.payload }

    case ACCEPTE_CONVERSATIONS_REQUEST:
      return { ...state, loading: true }
    case ACCEPTE_CONVERSATIONS_SUCCESS:
      return {
        ...state,
        conversations: {
          ...state.conversations,
          conversation: state.conversations.conversation.map((conversation) =>
            conversation._id === action.payload
              ? {
                  ...conversation,
                  accepted: false ? true : true,
                }
              : conversation
          ),
        },
      }
    case ACCEPTE_CONVERSATIONS_FAIL:
      return { loading: false, error: action.payload }

    case USER_LOGOUT:
      return { conversations: {} }
    default:
      return state
  }
}

// import {
//   GET_CONVERSATIONS_SUCCESS,
//   GET_CONVERSATIONS_REQUEST,
//   GET_CONVERSATIONS_FAIL,
//   SEEN_CONVERSATIONS_REQUEST,
//   SEEN_CONVERSATIONS_SUCCESS,
//   SEEN_CONVERSATIONS_FAIL,
// } from "../../constants/ChatConstants/conversationConstants"
// import { USER_LOGOUT } from "../../constants/userConstants"

// const initialState = {
//   conversations: {
//     conversation: [], // <--- now access this deep won't throw error
//   },
//   loading: false,
//   error: null,
// }

// export const conversationsListReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_CONVERSATIONS_REQUEST:
//       return { ...state, loading: true }
//     case GET_CONVERSATIONS_SUCCESS:
//       return { loading: false, conversations: action.payload }
//     case GET_CONVERSATIONS_FAIL:
//       return { loading: false, error: action.payload }

//     case SEEN_CONVERSATIONS_REQUEST:
//       return { ...state, loading: true }
//     case SEEN_CONVERSATIONS_SUCCESS:
//       return {
//         ...state,
//         conversations: {
//           ...state.conversations,
//           conversation: state.conversations.conversation.map((conversation) =>
//             conversation._id === action.payload
//               ? {
//                   ...conversation,
//                   unseen: false,
//                 }
//               : conversation
//           ),
//         },
//       }
//     case SEEN_CONVERSATIONS_FAIL:
//       return { loading: false, error: action.payload }
//     case USER_LOGOUT:
//       return initialState
//     default:
//       return state
//   }
// }
