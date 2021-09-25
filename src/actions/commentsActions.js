import axios from "axios"
import {
  getCommentsFail,
  getCommentsLoading,
  getCommentsSuccess,
  addCommentsFail,
  addCommentsSuccess,
  addCommentsLoading,
  deleteCommentsLoading,
  deleteCommentsSuccess,
  deleteCommentsFail,
  editCommentsLoading,
  editCommentsSuccess,
  editCommentsFail,
} from "../Slices/commentSlice"

// GET COMMENT BY post ID
export const getComments = (id) => async (dispatch, getState) => {
  try {
    dispatch(getCommentsLoading())
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
      `${process.env.REACT_APP_API_KEY}/publication/comments/${id}`,

      config
    )

    dispatch(getCommentsSuccess(data))
  } catch (error) {
    dispatch(
      getCommentsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}

// PUT COMMENT
// input: post_id , comment
export const addComment = (id, comment) => async (dispatch, getState) => {
  try {
    dispatch(addCommentsLoading())

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

    // make PUT request
    // user contains the data we want to update with (passed in params from UI)
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_KEY}/publication/comment/`,
      { id, comment },
      config
    )

    dispatch(addCommentsSuccess(data))
  } catch (error) {
    dispatch(
      addCommentsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}

// DELETE COMMENT
// input: post_id
export const deleteComment = (id) => async (dispatch, getState) => {
  try {
    dispatch(deleteCommentsLoading())

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.delete(
      `${process.env.REACT_APP_API_KEY}/comment/delete/${id}`,
      "",
      config
    )

    dispatch(deleteCommentsSuccess(data))
  } catch (error) {
    dispatch(
      deleteCommentsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}

// PUT COMMENT
// input: post_id , comment
export const editComment = (id, comment) => async (dispatch, getState) => {
  try {
    dispatch(editCommentsLoading())

    // distructor to get the token from getstate.userlogin.userinfo.token
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
      `${process.env.REACT_APP_API_KEY}/publication/comment/`,
      { id, comment },
      config
    )

    dispatch(editCommentsSuccess(data))
  } catch (error) {
    dispatch(
      editCommentsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
