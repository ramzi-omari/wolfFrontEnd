import { createSlice } from "@reduxjs/toolkit"

// GET transaction // Get By id transaction // post new transaction // Cancel Transaction
const initialState = {
  myTransactions: {},
  loading: false,
  error: false,
  transactionById: [],
  loadingById: false,
  errorById: false,
}

const walletSlice = createSlice({
  name: "wallet",
  initialState,

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
      state.myTransactions = action.payload
      state.loading = false
      state.error = false
    },
    // GET Transactions By ID
    getTransactionsByIdLoading: (state) => {
      state.loadingById = true
    },
    getTransactionsByIdFail: (state, action) => {
      state.errorById = action.payload
      state.loadingById = false
    },
    getTransactionsByIdSuccess: (state, action) => {
      state.transactionById = action.payload
      state.loadingById = false
      state.errorById = false
    },
    //Cancel Transaction
    cancelTransactionLoading: (state) => {
      state.loading = true
    },
    cancelTransactionFail: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    // needs TEST
    cancelTransactionSuccess: (state, action) => {
      //  const transaction = state.myTransactions.find(transaction => transaction.id === action.payload.transactions._id)
      state.myTransactions[action.payload._id] = action.payload.transactions
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

    // NEEDS Check
    postTransactionSuccess: (state, action) => {
      if (!state.myTransactions) {
        state.myTransactions.transactions = []
      }
      state.myTransactions.transactions.push(action.payload.transaction["0"]) // .transactions
      state.loading = false
      state.error = false
    },
    TransactionsReset: (state, action) => {
      return initialState
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
  TransactionsReset,
} = actions

export default reducer
