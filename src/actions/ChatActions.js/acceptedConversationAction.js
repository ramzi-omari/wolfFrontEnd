import {
  acceptConversationsLoading,
  acceptConversationsSuccess,
  acceptConversationsFail,
} from "../../Slices/conversationsSlice"
import axios from "axios"

export const updateAccepteConversation = (id) => async (dispatch, getState) => {
  try {
    dispatch(acceptConversationsLoading())

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
      `${process.env.REACT_APP_API_KEY}/conversation/accepted/${id}`,
      "",
      config
    )

    dispatch(acceptConversationsSuccess(id))
  } catch (error) {
    dispatch(
      acceptConversationsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
