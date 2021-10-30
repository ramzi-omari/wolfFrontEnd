import { Button } from "@material-ui/core"
import React from "react"
import { useDispatch } from "react-redux"
import { logout } from "../actions/usersActions"

const Accc = () => {
  const dispatch = useDispatch()
  console.log("locl111", JSON.parse(localStorage.getItem("userInfo")))

  const disc = () => {
    dispatch(logout())
    localStorage.removeItem("userInfo")
    console.log("locl", JSON.parse(localStorage.getItem("userInfo")))
  }
  return (
    <div>
      <h5>accueil</h5>
      <Button onClick={disc}>disco</Button>
    </div>
  )
}

export default Accc
