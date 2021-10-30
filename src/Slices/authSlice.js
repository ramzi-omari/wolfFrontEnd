import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    isLoggedTrue: (state) => {
      state.isAuthenticated = true
    },
    isLoggedFalse: (state) => {
      state.isAuthenticated = false
    },
  },
})

const { reducer, actions } = authSlice
export const { isLoggedTrue, isLoggedFalse } = actions

export default reducer
