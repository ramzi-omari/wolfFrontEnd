// axios actions
// ACTION REDUCER
import {
  USER_DETAILS_REQUEST,
  USER_DETAILS_FAIL,
  USER_DETAILS_SUCCESS,
} from "../constants/userConstants"
import axios from "axios"

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST })

    const { data } = await axios.get(
      `http://jsonplaceholder.typicode.com/users`
    )

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
