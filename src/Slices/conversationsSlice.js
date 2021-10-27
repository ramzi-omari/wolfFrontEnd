import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  conversations: {},
  loading: false,
  error: false,
}

const conversationsSlice = createSlice({
  name: "conversationsList",
  initialState,

  reducers: {
    // GET conversations
    getConversationsLoading: (state) => {
      state.loading = true
    },
    getConversationsFail: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    getConversationsSuccess: (state, action) => {
      state.conversations = action.payload
      state.loading = false
      state.error = false
    },

    seenConversationsLoading: (state) => {
      state.loading = true
    },
    seenConversationsFail: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    seenConversationsSuccess: (state, action) => {
      const conversation = state.conversations.conversation.find(
        (item) => item._id == action.payload
      )
      if (conversation) {
        conversation.unseen = false
      }

      state.loading = false
      state.error = false
    },

    acceptConversationsLoading: (state) => {
      state.loading = true
    },
    acceptConversationsFail: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    acceptConversationsSuccess: (state, action) => {
      const conversation = state.conversations.conversation.find(
        (item) => item._id == action.payload
      )
      if (conversation) {
        conversation.accepted = true
      }

      state.loading = false
      state.error = false
    },
    addMessages: (state, action) => {
      const conversation = state.conversations.conversation.find(
        (item) => item._id == action.payload.conversationID
      )
      if (conversation) {
        conversation.messages.unshift(action.payload.contnt)
      }
      // state.conversations.conversation.push(action.payload)
    },
    conversationsReset: (state, action) => {
      return initialState
    },
  },
})

const { reducer, actions } = conversationsSlice
export const {
  getConversationsLoading,
  getConversationsSuccess,
  getConversationsFail,
  seenConversationsLoading,
  seenConversationsSuccess,
  seenConversationsFail,
  acceptConversationsLoading,
  acceptConversationsSuccess,
  acceptConversationsFail,
  addMessages,
  conversationsReset,
} = actions

export default reducer
