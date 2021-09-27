import { createSlice } from "@reduxjs/toolkit"

// GET transaction // Get By id transaction // post new transaction // Cancel Transaction

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    myTransactions: {},
    loading: false,
    error: false,
  },

  reducers: {
    // GET Transactions
    getTransactionsLoading: (state) => {
      state.loading = true
    },
    getTransactionsFail: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    getTransactionsSuccess: (state, action) => {
      state.post = action.payload
      state.loading = false
      state.error = false
    },
    // GET Transactions By ID
    getTransactionsByIdLoading: (state) => {
      state.loading = true
    },
    getTransactionsByIdFail: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    getTransactionsByIdSuccess: (state, action) => {
      state.post = action.payload
      state.loading = false
      state.error = false
    },
    //Cancel Transaction
    cancelTransactionLoading: (state) => {
      state.loading = true
    },
    cancelTransactionFail: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    cancelTransactionSuccess: (state, action) => {
      if (!state.post) {
        state.post = []
      }
      state.post = action.payload
      state.loading = false
      state.error = false
    },
    //Post new Transaction
    postTransactionLoading: (state) => {
      state.loading = true
    },
    postTransactionFail: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    postTransactionSuccess: (state, action) => {
      if (!state.post) {
        state.post = []
      }
      state.post = action.payload
      state.loading = false
      state.error = false
    },
  },
})

const { reducer, actions } = walletSlice
export const {
  getTransactionsLoading,
  getTransactionsSuccess,
  getTransactionsFail,
  cancelTransactionLoading,
  cancelTransactionSuccess,
  cancelTransactionFail,
  postTransactionLoading,
  postTransactionSuccess,
  postTransactionFail,
  getTransactionsByIdLoading,
  getTransactionsByIdSuccess,
  getTransactionsByIdFail,
} = actions

export default reducer
