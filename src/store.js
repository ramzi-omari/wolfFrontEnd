// import { createStore, combineReducers, applyMiddleware } from "redux"
// import thunk from "redux-thunk"
// import { composeWithDevTools } from "redux-devtools-extension"
// import {
//   userLoginReducer,
//   userRegisterReducer,
//   userDetailsReducer,
//   userUpdateProfileReducer,
// } from "./reducers/userReducers"
// import { postsListReducer } from "./reducers/journalReducers"
// import {
//   getConsultantReducer,
//   getInvestorReducer,
//   getEntrepriseReducer,
// } from "./reducers/getUsersReducers"
// import { conversationsListReducer } from "./reducers/ChatReducers/conversationsReducers"

// const reducer = combineReducers({
//   // HACENE Combine all reducers here
//   userLogin: userLoginReducer,
//   userRegister: userRegisterReducer,
//   userDetails: userDetailsReducer,
//   userUpdateProfile: userUpdateProfileReducer,
//   postsList: postsListReducer,
//   getConsultant: getConsultantReducer,
//   getInvestor: getInvestorReducer,
//   getEntreprise: getEntrepriseReducer,
//   conversationsList: conversationsListReducer,
// })

// const userInfoFromStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null

// const initialState = {
//   userLogin: { userInfo: userInfoFromStorage },
//   // userUpdateProfile: [],
// }

// const middleware = [thunk]

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// )

// export default store

import { configureStore } from "@reduxjs/toolkit"
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers"
import { postsListReducer } from "./reducers/journalReducers"
import {
  getConsultantReducer,
  getInvestorReducer,
  getEntrepriseReducer,
} from "./reducers/getUsersReducers"
import commentsReducer from "./Slices/commentSlice"
import userDetailReducer from "./Slices/profileSlice"
// import investors from "./reducers/investorSlice" import slice from reducerSlice

import { conversationsListReducer } from "./reducers/ChatReducers/conversationsReducers"

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    // userDetails: userDetailsReducer,
    // userUpdateProfile: userUpdateProfileReducer,
    postsList: postsListReducer,
    getConsultant: getConsultantReducer,
    getInvestor: getInvestorReducer,
    getEntreprise: getEntrepriseReducer,
    conversationsList: conversationsListReducer,
    comments: commentsReducer,
    userInformations: userDetailReducer,
  },
  initialState,
})

export default store
