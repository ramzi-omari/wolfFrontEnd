import { Button, Paper } from "@material-ui/core"
import React from "react"
import { useDispatch } from "react-redux"
import { logout } from "../../actions/usersActions"

const Home = () => {
  return (
    <Paper
      style={{
        width: "auto",
        margin: "2rem",
        textAlign: "center",
      }}
    >
      <span style={{ width: "2rem" }}>Click on Side Bar</span>
    </Paper>
  )
}

export default Home
