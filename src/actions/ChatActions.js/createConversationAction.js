import {
  CREATE_CONVERSATIONS_FAIL,
  CREATE_CONVERSATIONS_REQUEST,
  CREATE_CONVERSATIONS_SUCCESS,
} from "../../constants/ChatConstants/conversationConstants"
import {
  createConversationsLoading,
  createConversationsSuccess,
  createConversationsFail,
} from "../../Slices/createConversationSlice"
import axios from "axios"

// create convo params in POPUP from members components
// check with hacene the response we get
// + add reducers
// request from members  dispatch(createConversation("receiver id", newMessage))

export const createConversation =
  (receiver, message) => async (dispatch, getState) => {
    try {
      dispatch(createConversationsLoading())
      // dispatch({
      //   type: CREATE_CONVERSATIONS_REQUEST,
      // })

      const {
        userLogin: { userInfo },
      } = getState()

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      // make request
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_KEY}/conversation/`,
        { receiver, message },
        config
      )

      dispatch(createConversationsSuccess(data))
      // dispatch({
      //   type: CREATE_CONVERSATIONS_SUCCESS,
      //   payload: data,
      // })
    } catch (error) {
      dispatch(
        createConversationsFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      )
      // dispatch({
      //   type: CREATE_CONVERSATIONS_FAIL,
      //   payload:
      //     error.response && error.response.data.message
      //       ? error.response.data.message
      //       : error.message,
      // })
    }
  }
