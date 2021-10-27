import {
  getConversationsLoading,
  getConversationsSuccess,
  getConversationsFail,
  addMessages,
} from "../../Slices/conversationsSlice"
import axios from "axios"

export const getConversations = () => async (dispatch, getState) => {
  // getState to get the token from userInfo
  try {
    dispatch(getConversationsLoading())

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
      dispatch(getConversationsSuccess(data))
    }
  } catch (error) {
    dispatch(
      getConversationsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}

export const addMsg = (conversationID, contnt) => (dispatch, getState) => {
  dispatch(addMessages(conversationID, contnt))
}
