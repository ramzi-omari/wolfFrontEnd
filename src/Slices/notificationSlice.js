import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  notifications: {},
  loading: false,
  error: false,
}

const notificationsSlice = createSlice({
  name: "NotificationsList",
  initialState,

  reducers: {
    // GET Notifications
    getNotificationsLoading: (state) => {
      state.loading = true
    },
    getNotificationsFail: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    getNotificationsSuccess: (state, action) => {
      state.notifications = action.payload
      state.loading = false
      state.error = false
    },
    notificationsReset: (state, action) => {
      return initialState
    },
  },
})

const { reducer, actions } = notificationsSlice
export const {
  getNotificationsLoading,
  getNotificationsSuccess,
  getNotificationsFail,
  notificationsReset,
} = actions

export default reducer
