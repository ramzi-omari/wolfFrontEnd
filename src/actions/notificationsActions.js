import axios from "axios"
import {
  getNotificationsLoading,
  getNotificationsSuccess,
  getNotificationsFail,
} from "../Slices/notificationSlice"

export const getNotifications = () => async (dispatch, getState) => {
  //redux thunk allow us to use function inside function
  try {
    dispatch(getNotificationsLoading())
    // after dispatching action, we make our request
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

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_KEY}/users/notification`,
      config
    )

    dispatch(getNotificationsSuccess(data))
  } catch (error) {
    dispatch(
      getNotificationsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
