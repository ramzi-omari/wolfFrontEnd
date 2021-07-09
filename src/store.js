// import { createStore, combineReducers, applyMiddleware } from "redux"
// import thunk from "redux-thunk"
// import { composeWithDevTools } from "redux-devtools-extension"
// // import { userListReducer } from "./reducers/userReducers"
// import { userLoginReducer } from "./reducers/userReducers"

// const reducer = combineReducers({
//   // userList is what's gonna show as a piece of state
//   // userList: userListReducer,
//   userLogin: userLoginReducer,
// })

// const userInfoFromStorage = localStorage.getItem("userInfo")
//   ? JSON.stringify(localStorage.getItem("userInfo"))
//   : null

// const initialState = {
//   userLogin: { userInfo: userInfoFromStorage },
// }

// const middleware = [thunk]

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// )

// export default store
