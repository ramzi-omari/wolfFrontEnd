// // axios actions
// // ACTION REDUCER
// import {
//   USER_DETAILS_REQUEST,
//   USER_DETAILS_FAIL,
//   USER_DETAILS_SUCCESS,
//   USER_LOGIN_REQUEST,
//   USER_LOGIN_SUCCESS,
//   USER_LOGIN_FAIL,
// } from "../constants/userConstants"
// import axios from "axios"

// export const login = (email, password) => async (dispatch) => {
//   try {
//     dispatch({
//       type: USER_LOGIN_REQUEST,
//     })

//     // content type in headers of data sended
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }

//     const { data } = await axios.post(
//       "/api/users/login",
//       { email, password },
//       config
//     )

//     dispatch({
//       type: USER_LOGIN_SUCCESS,
//       payload: data,
//     })

//     // set user in localstorage
//     localStorage.setItem("userInfo", JSON.stringify(data))
//   } catch (error) {
//     dispatch({
//       type: USER_LOGIN_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     })
//   }
// }

//
// export const getUsers = () => async (dispatch) => {
//   try {
//     dispatch({ type: USER_DETAILS_REQUEST })

//     const { data } = await axios.get(
//       `http://jsonplaceholder.typicode.com/users`
//     )

//     dispatch({
//       type: USER_DETAILS_SUCCESS,
//       payload: data,
//     })
//   } catch (error) {
//     dispatch({
//       type: USER_DETAILS_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     })
//   }
// }
