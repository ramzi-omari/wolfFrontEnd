// axios actions
// ACTION REDUCER
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGOUT,
  USER_DETAILS_REQUEST,
  USER_DETAILS_FAIL,
  USER_DETAILS_SUCCESS,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
} from "../constants/userConstants"
import {
  getProfileLoading,
  getProfileSuccess,
  getProfileFail,
  editProfileLoading,
  editProfileSuccess,
  editProfileFail,
  profilReset,
} from "../Slices/profileSlice"
import axios from "axios"
import { TransactionsReset } from "../Slices/walletSlice"
import { postsReset } from "../Slices/postsSlice"
import { commentsReset } from "../Slices/commentSlice"

// HACENE LOGIN logic
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    // content type in headers of data sended
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    console.log("api" + process.env.REACT_APP_API_KEY)
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_KEY}/auth/signin`,
      { email, password },
      config
    )

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
    // set user in localstorage
    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const register =
  (first_name, last_name, email, birthDate, password, phone, type) =>
  async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      })

      const config = {
        // to pass the token with protected routes
        // send in the headers content type of application/json
        headers: {
          "Content-Type": "application/json",
        },
      }

      // make request
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_KEY}/auth/signup`,
        { first_name, last_name, email, birthDate, password, phone, type },
        config
      )

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      })

      // to log in the user directly after register
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      })

      localStorage.setItem("userInfo", JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo")
  dispatch({ type: USER_LOGOUT })
  dispatch(TransactionsReset())
  dispatch(profilReset())
  dispatch(postsReset())
  dispatch(commentsReset())
}

export const getUserDetails = () => async (dispatch, getState) => {
  // getState to get the token from userInfo
  try {
    dispatch(getProfileLoading())
    // old dispatch
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_KEY}/users/`,
      config
    )

    if (data) {
      dispatch(getProfileSuccess(data))

      // dispatch({
      //   type: USER_DETAILS_SUCCESS,
      //   payload: data,
      // })
    }
  } catch (error) {
    dispatch(
      getProfileFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
    // dispatch({
    //   type: USER_DETAILS_FAIL,
    //   payload:
    //     error.response && error.response.data.message
    //       ? error.response.data.message
    //       : error.message,
    // })
  }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    // dispatch({
    //   type: USER_UPDATE_PROFILE_REQUEST,
    // })
    dispatch(editProfileLoading())

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `${process.env.REACT_APP_API_KEY}/users/`,
      user,
      config
    )

    dispatch(editProfileSuccess(data))

    // dispatch({
    //   type: USER_UPDATE_PROFILE_SUCCESS,
    //   payload: data,
    // })
  } catch (error) {
    dispatch(
      editProfileFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
    // dispatch({
    //   type: USER_UPDATE_PROFILE_FAIL,
    //   payload:
    //     error.response && error.response.data.message
    //       ? error.response.data.message
    //       : error.message,
    // })
  }
}
