import { createSlice } from "@reduxjs/toolkit"

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null

const initialState = {
  isAuthenticated: userInfoFromStorage === null ? false : true,
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
