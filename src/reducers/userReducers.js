// // import {
// //   USER_DETAILS_REQUEST,
// //   USER_DETAILS_FAIL,
// //   USER_DETAILS_SUCCESS,
// // } from "../constants/userConstants"
// // // two parameter , initial state & action
// // // action which has a type then do multiple thing dependin on the type of action
// // export const userListReducer = (state = { users: [] }, action) => {
// //   switch (action.type) {
// //     case USER_DETAILS_SUCCESS:
// //       return { loading: true, users: [] }
// //     case USER_DETAILS_REQUEST:
// //       return { loading: false, users: action.payload }
// //     case USER_DETAILS_FAIL:
// //       return { loading: false, error: action.payload }

// //     default:
// //       return state
// //   }
// // }

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants"

// HACENE login reducer depending on action type
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: true, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: true, error: action.payload }
    case USER_LOGOUT:
      return {}

    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true }
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}