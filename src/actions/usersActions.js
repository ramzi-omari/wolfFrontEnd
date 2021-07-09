// axios actions
// ACTION REDUCER
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants"
import axios from "axios"

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

    const { data } = await axios.post(
      "https://wolfap.herokuapp.com/api/auth/signin",
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

export const register = (name, email, password) => async (dispatch) => {
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
    console.log("register call1")

    // make request
    const { data } = await axios.post(
      "https://wolfap.herokuapp.com/api/auth/signup",
      { name, email, password },
      config
    )
    console.log("register call2")

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })

    console.log("register success")
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
