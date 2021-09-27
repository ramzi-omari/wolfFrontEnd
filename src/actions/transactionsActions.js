// GET transaction // Get By id transaction // post new transaction // Cancel Transaction

import axios from "axios"
import {
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
} from "../Slices/walletSlice"

// GET Transactions
// transactionRouter.get("/transaction", GetMyTransactions)
// Response: set in store Transactions
// json({
//     success: true,
//     transactions,
// })
export const getTransactions = () => async (dispatch, getState) => {
  try {
    dispatch(getTransactionsLoading())
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_KEY}/transaction/`,
      config
    )

    dispatch(getTransactionsSuccess(data))
  } catch (error) {
    dispatch(
      getTransactionsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}

// GET Transaction BY post ID
// transactionRouter.get("/details/:id", GetTransactionById)
// Response: set in store  TransactionById
// json({
//             success: true,
//             transaction: transactions,
//         })
export const getTransactionById = (id) => async (dispatch, getState) => {
  try {
    dispatch(getTransactionsByIdLoading())

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_KEY}/transaction/details/${id}`,
      "",
      config
    )

    dispatch(getTransactionsByIdSuccess(data))
  } catch (error) {
    dispatch(
      getTransactionsByIdFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}

// POST Transaction
// input: amount, to, motif
// transactionRouter.post('/', PostTransaction);
// Response: push(update) to store
// json({
//     success: true,
//     transaction: savedTransaction
// })
export const postTransaction =
  (amount, to, motif) => async (dispatch, getState) => {
    try {
      dispatch(postTransactionLoading())
      const {
        userLogin: { userInfo },
      } = getState()

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      const { data } = await axios.post(
        `${process.env.REACT_APP_API_KEY}/transaction/`,
        { amount, to, motif },
        config
      )

      dispatch(postTransactionSuccess(data))
    } catch (error) {
      dispatch(
        postTransactionFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      )
    }
  }

// PUT Cancel Transaction
// input: id
// transactionRouter.put("/cancel/:id", CancelTransaction)
// Response:
//                IF status !== PENDING :
//  res.status(422).json({
//     status: false,
//     message: `Transaction status is ${transactions.status}, you can't cancel`,
// })
//                  ELSE Canceled
// status(200).json({
//     success: true,
//     transaction: savedTransactions,
// });

export const cancelTransaction = (id) => async (dispatch, getState) => {
  try {
    dispatch(cancelTransactionLoading())

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `${process.env.REACT_APP_API_KEY}/transaction/cancel/${id}`,
      "",
      config
    )

    dispatch(cancelTransactionSuccess(data))
  } catch (error) {
    dispatch(
      cancelTransactionFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
