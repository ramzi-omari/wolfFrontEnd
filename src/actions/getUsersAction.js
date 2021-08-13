// axios actions
// ACTION REDUCER
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
import axios from "axios"

export const getUsersDetail = (type) => async (dispatch, getState) => {
  // getState to get the token from userInfo
  console.log(type)
  try {
    dispatch({
      type:
        type === "ENTREPRISE"
          ? GET_ENTREPRISE_REQUEST
          : type === "CONSULTANT"
          ? GET_CONSULTANT_REQUEST
          : GET_INVESTOR_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      // to pass the token with protected routes
      // send in the headers content type of application/json
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    // make request
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_KEY}/users/type/${type}`,
      config
    )

    if (data) {
      dispatch({
        type:
          type === "ENTREPRISE"
            ? GET_ENTREPRISE_SUCCESS
            : type === "CONSULTANT"
            ? GET_CONSULTANT_SUCCESS
            : GET_INVESTOR_SUCCESS,
        payload: data,
      })
    }

    console.log("get user info success")
  } catch (error) {
    dispatch({
      type:
        type === "ENTREPRISE"
          ? GET_ENTREPRISE_FAIL
          : type === "CONSULTANT"
          ? GET_CONSULTANT_FAIL
          : GET_INVESTOR_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
