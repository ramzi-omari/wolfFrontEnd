import { createSlice } from "@reduxjs/toolkit"

const profileSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: {},
    loading: false,
    error: false,
    updateSuccess: false,
  },

  reducers: {
    // GET userDetailsS
    getProfileLoading: (state) => {
      state.loading = true
    },
    getProfileFail: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    getProfileSuccess: (state, action) => {
      state.userDetails = action.payload
      state.loading = false
      state.error = false
    },
    //EDIT userDetails
    editProfileLoading: (state) => {
      state.loading = true
    },
    editProfileFail: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    editProfileSuccess: (state, action) => {
      if (!state.userDetails) {
        state.userDetails = []
      }
      state.userDetails = action.payload
      //state.userDetails.push(action.payload)
      state.updateSuccess = true
      state.loading = false
      state.error = false
    },
  },
})

const { reducer, actions } = profileSlice
export const {
  getProfileLoading,
  getProfileSuccess,
  getProfileFail,
  editProfileLoading,
  editProfileSuccess,
  editProfileFail,
} = actions

export default reducer
