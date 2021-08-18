import {
  SEEN_CONVERSATIONS_REQUEST,
  SEEN_CONVERSATIONS_SUCCESS,
  SEEN_CONVERSATIONS_FAIL,
} from "../../constants/ChatConstants/conversationConstants"
import axios from "axios"

export const updateSeenConversation = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SEEN_CONVERSATIONS_REQUEST,
    })

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

    dispatch({
      type: SEEN_CONVERSATIONS_SUCCESS,
      payload: id,
    })

    // FAUT CHECKER DATA ENVOYER AU REDUCER et verifie si on peut acceder à id dans reducer
  } catch (error) {
    dispatch({
      type: SEEN_CONVERSATIONS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
