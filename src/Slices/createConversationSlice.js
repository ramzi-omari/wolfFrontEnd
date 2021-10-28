import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  createConvo: {},
  loading: false,
  error: false,
}

const createConversationsSlice = createSlice({
  name: "createConvo",
  initialState,

  reducers: {
    // GET conversations
    createConversationsLoading: (state) => {
      state.loading = true
    },
    createConversationsFail: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    createConversationsSuccess: (state, action) => {
      state.createConvo = action.payload
      state.loading = false
      state.error = false
    },
    createConversationsReset: (state, action) => {
      return initialState
    },
  },
})

const { reducer, actions } = createConversationsSlice
export const {
  createConversationsLoading,
  createConversationsSuccess,
  createConversationsFail,
  createConversationsReset,
} = actions

export default reducer
