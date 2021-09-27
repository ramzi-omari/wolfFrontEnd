import { createSlice } from "@reduxjs/toolkit"

// GET POSTS & Like POSTS

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    post: {},
    loading: false,
    error: false,
  },

  reducers: {
    // GET posts
    getPostsLoading: (state) => {
      state.loading = true
    },
    getPostsFail: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    getPostsSuccess: (state, action) => {
      state.post = action.payload
      state.loading = false
      state.error = false
    },
    //like post
    likePostsLoading: (state) => {
      state.loading = true
    },
    likePostsFail: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    likePostsSuccess: (state, action) => {
      if (!state.post) {
        state.post = []
      }
      state.post = action.payload
      state.loading = false
      state.error = false
    },
  },
})

const { reducer, actions } = postsSlice
export const {
  getPostsLoading,
  getPostsSuccess,
  getPostsFail,
  likePostsLoading,
  likePostsSuccess,
  likePostsFail,
} = actions

export default reducer
