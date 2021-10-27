import axios from "axios"
import {
  getPostsLoading,
  getPostsSuccess,
  getPostsFail,
  likePostsLoading,
  likePostsSuccess,
  likePostsFail,
} from "../Slices/postsSlice.js"

export const getListPosts = () => async (dispatch, getState) => {
  //redux thunk allow us to use function inside function
  try {
    dispatch(getPostsLoading())
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
      `${process.env.REACT_APP_API_KEY}/publication/`,
      config
    )

    dispatch(getPostsSuccess(data))
  } catch (error) {
    dispatch(
      getPostsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}

// LIKE POST

export const likePost = (id) => async (dispatch, getState) => {
  //redux thunk allow us to use function inside function
  try {
    dispatch(likePostsLoading())
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_KEY}/publication/like/${id}`,
      "",
      config
    )

    dispatch(likePostsSuccess(data))
  } catch (error) {
    dispatch(
      likePostsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
