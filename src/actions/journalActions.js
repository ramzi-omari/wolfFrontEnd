import axios from "axios"
import {
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
  POSTS_LIST_FAIL,
} from "../constants/journalConstants"

export const listProducts = () => async (dispatch) => {
  //redux thunk allow us to use function inside function
  try {
    dispatch({ type: POSTS_LIST_REQUEST })
    // after dispatching action, we make our request
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_KEY}/publication/`,
      config
    )

    // we dispatch the data SUCCESSFULY
    dispatch({
      type: POSTS_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: POSTS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
