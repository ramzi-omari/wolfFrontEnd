import { createSlice } from "@reduxjs/toolkit"

// GET POSTS & Like POSTS

const postsSlice = createSlice({
  name: "postsList",
  initialState: {
    posts: {},
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
      state.posts = action.payload
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
      const { publication } = action.payload
      const { _id } = publication

      const pubs = state.posts.publications.find((pub) => pub._id == _id)
      if (pubs) {
        pubs.nbr_like = publication.nbr_like
        pubs.like = publication.like
      }

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
