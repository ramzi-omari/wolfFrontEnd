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
import postsReducer from "./Slices/postsSlice"
import walletReducer from "./Slices/walletSlice"
import conversationReducer from "./Slices/conversationsSlice"
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
    // postsList: postsListReducer,
    getConsultant: getConsultantReducer,
    getInvestor: getInvestorReducer,
    getEntreprise: getEntrepriseReducer,
    // conversationsList: conversationsListReducer,
    comments: commentsReducer,
    userDetails: userDetailReducer,
    postsList: postsReducer,
    wallet: walletReducer,
    conversationsList: conversationReducer,
  },
  initialState,
})

export default store
