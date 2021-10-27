import {
  seenConversationsLoading,
  seenConversationsSuccess,
  seenConversationsFail,
} from "../../Slices/conversationsSlice"
import axios from "axios"

export const updateSeenConversation = (id) => async (dispatch, getState) => {
  try {
    dispatch(seenConversationsLoading())

    // distructor to get the token from getstate.userlogin.userinfo.token
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      // to pass the token with protected routes
      // send in the headers content type of application/json
      headers: {
        "Content-Type": "application/json",
        // we pass our tokens as authorization
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `${process.env.REACT_APP_API_KEY}/conversation/unseen/${id}`,
      "",
      config
    )

    dispatch(seenConversationsSuccess(id))
  } catch (error) {
    dispatch(
      seenConversationsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
