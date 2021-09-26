import { createSlice } from "@reduxjs/toolkit"

// TESTS NEEDED WITH REAL DATA

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    comment: {},
    loading: false,
    error: false,
  },

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
      // NEEDS TEST ADD ITEM
      state.comment.push(action.payload)
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
      // DELETE ITEM FROM REDUX STORE NEEDS TEST
      // check actions.payload to see if there's the comment ID to delete
      state.comment = state.comment.filter(
        (arrow) => arrow.id !== action.payload
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
      //   check if i get id + newComment in payload
      const { id, newComment } = action.payload
      if (!state.comment[id]) {
        state.comment[id] = []
      }
      // ----
      state.comment[id].push(newComment)
      state.comment.push(action.payload)

      state.loading = false
      state.error = false
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
} = actions

export default reducer
