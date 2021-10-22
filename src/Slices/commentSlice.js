import { createSlice } from "@reduxjs/toolkit"

// TESTS NEEDED WITH REAL DATA
const initialState = {
  comment: {},
  loading: false,
  error: false,
}

const commentSlice = createSlice({
  name: "comments",
  initialState,

  reducers: {
    // GET COMMENTS
    getCommentsLoading: (state) => {
      state.loading = true
    },
    getCommentsFail: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    getCommentsSuccess: (state, action) => {
      state.comment = action.payload
      state.loading = false
      state.error = false
    },
    // ADD COMMENT
    addCommentsLoading: (state) => {
      state.loading = true
    },
    addCommentsFail: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    addCommentsSuccess: (state, action) => {
      state.comment.comments.push(action.payload.comment["0"])
      state.loading = false
      state.error = false
    },
    // DELETE COMMENT
    deleteCommentsLoading: (state) => {
      state.loading = true
    },
    deleteCommentsFail: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    deleteCommentsSuccess: (state, action) => {
      const { commentId } = action.payload
      // state.comment.comments.filter((item) => item._id !== commentId)
      state.comment.comments = state.comment.comments.filter(
        (item) => item._id !== commentId
      )
      state.loading = false
      state.error = false
    },
    //EDIT COMMENT
    editCommentsLoading: (state) => {
      state.loading = true
    },
    editCommentsFail: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    editCommentsSuccess: (state, action) => {
      const editedComment = state.comment.comments.find(
        (comment) => comment._id === action.payload.comment._id
      )
      if (editedComment) {
        editedComment.comment = action.payload.comment.comment
      }
      state.loading = false
      state.error = false
    },
    commentsReset: (state, action) => {
      return initialState
    },
  },
})

const { reducer, actions } = commentSlice
export const {
  getCommentsLoading,
  getCommentsSuccess,
  getCommentsFail,
  addCommentsLoading,
  addCommentsSuccess,
  addCommentsFail,
  deleteCommentsLoading,
  deleteCommentsSuccess,
  deleteCommentsFail,
  editCommentsLoading,
  editCommentsSuccess,
  editCommentsFail,
  commentsReset,
} = actions

export default reducer
