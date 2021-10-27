import { configureStore } from "@reduxjs/toolkit"
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers"
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
    getConsultant: getConsultantReducer,
    getInvestor: getInvestorReducer,
    getEntreprise: getEntrepriseReducer,
    comments: commentsReducer,
    userDetails: userDetailReducer,
    postsList: postsReducer,
    wallet: walletReducer,
    conversationsList: conversationReducer,
  },
  initialState,
})

export default store
