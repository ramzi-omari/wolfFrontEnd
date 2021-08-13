import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
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

const reducer = combineReducers({
  // HACENE Combine all reducers here
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  postsList: postsListReducer,
  getConsultant: getConsultantReducer,
  getInvestor: getInvestorReducer,
  getEntreprise: getEntrepriseReducer,
})

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  // userUpdateProfile: [],
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
