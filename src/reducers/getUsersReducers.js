import {
  GET_ENTREPRISE_REQUEST,
  GET_ENTREPRISE_SUCCESS,
  GET_ENTREPRISE_FAIL,
  GET_INVESTOR_REQUEST,
  GET_INVESTOR_SUCCESS,
  GET_INVESTOR_FAIL,
  GET_CONSULTANT_REQUEST,
  GET_CONSULTANT_SUCCESS,
  GET_CONSULTANT_FAIL,
} from "../constants/getUsersConstants"
import { USER_LOGOUT } from "../constants/userConstants"

export const getEntrepriseReducer = (state = { users: {} }, action) => {
  switch (action.type) {
    case GET_ENTREPRISE_REQUEST:
      return { ...state, loading: true }
    case GET_ENTREPRISE_SUCCESS:
      return { loading: false, users: action.payload }
    case GET_ENTREPRISE_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return { users: {} }
    default:
      return state
  }
}

export const getConsultantReducer = (state = { users: {} }, action) => {
  switch (action.type) {
    case GET_CONSULTANT_REQUEST:
      return { ...state, loading: true }
    case GET_CONSULTANT_SUCCESS:
      return { loading: false, users: action.payload }
    case GET_CONSULTANT_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return { users: {} }
    default:
      return state
  }
}

export const getInvestorReducer = (state = { users: {} }, action) => {
  switch (action.type) {
    case GET_INVESTOR_REQUEST:
      return { ...state, loading: true }
    case GET_INVESTOR_SUCCESS:
      return { loading: false, users: action.payload }
    case GET_INVESTOR_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return { users: {} }
    default:
      return state
  }
}
