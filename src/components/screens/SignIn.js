import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

import Message from "../../components/utile/Message"
import Loader from "../../components/utile/Loader"
import { login } from "../../actions/usersActions"
/////////////////////////

const useStyles = makeStyles((theme) => ({
  //////////////////
  inputField: {
    width: "100%",
    margin: theme.spacing(1, 0),
  },
  ////////////////
  radius: {
    borderRadius: 20,
    paddingLeft: "2rem",
    paddingRight: "2rem",
    color: "#f1f1f1",
    fontWeight: 600,
    backgroundColor: "darkslategray",
    // borderWidth: "2px",
    "&:hover": {
      backgroundColor: "rgba(47, 79, 79, 0.514)",
      borderColor: "transparent",
    },
  },

  root: {
    display: "flex",
    "& .MuiInputLabel-outlined": {
      color: "black",
    },
    "& label.Mui-focused": {
      color: "green",
      fontWeight: 600,
    },

    "& .MuiOutlinedInput-root": {
      backgroundColor: "rgba(240, 240, 240, 0.66)",
      borderRadius: 20,
      width: 370,

      "&:hover fieldset": {
        borderColor: "white",
        color: "yellow",
      },

      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
}))

const SignIn = () => {
  const classes = useStyles()

  //HACENE track our states
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  //HACENE initialise useDispatch + useSelector (make use of userLogin from store.js)
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  //HACENE dispatch en onSubmit form --- use 'login' from usersAction
  const handleSubmitLogin = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <div>
      {/* if there's an error or if loading */}
      {error && <Message severity="error">{error}</Message>}
      {loading && <Loader />}
      <form onSubmit={handleSubmitLogin}>
        {/* 3) TextField */}
        <TextField
          placeholder="Enter Your E-mail Address"
          label="E-mail"
          variant="outlined"
          fullWidth
          className={classes.inputField}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <TextField
          placeholder="Enter Your password"
          label="Password"
          variant="outlined"
          fullWidth
          className={classes.inputField}
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.radius}
        >
          se connecter
        </Button>
      </form>
    </div>
  )
}

export default SignIn
