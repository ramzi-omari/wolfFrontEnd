import {
  GET_CONVERSATIONS_REQUEST,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_FAIL,
} from "../../constants/ChatConstants/conversationConstants"
import axios from "axios"

export const getConversations = () => async (dispatch, getState) => {
  // getState to get the token from userInfo
  try {
    dispatch({
      type: GET_CONVERSATIONS_REQUEST,
    })

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
      `${process.env.REACT_APP_API_KEY}/conversation/`,
      config
    )

    if (data) {
      dispatch({
        type: GET_CONVERSATIONS_SUCCESS,
        payload: data,
      })
    }
  } catch (error) {
    dispatch({
      type: GET_CONVERSATIONS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
