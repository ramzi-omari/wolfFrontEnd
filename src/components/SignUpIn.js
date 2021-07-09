import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import "../SignUpIn.css"
import SignDrawer from "./fixed/SignDrawer"

import Grid from "@material-ui/core/Grid"
import AccountCircle from "@material-ui/icons/AccountCircle"
import PasswordIcon from "@material-ui/icons/Keyboard"
// import Message from "../components/Message"
// import Loader from "../components/Loader"
// import { login } from "../actions/usersActions"
/////////////////////////
import {
  FormControlLabel,
  Checkbox,
  FormControl,
  FormHelperText,
} from "@material-ui/core"

import { useForm } from "react-hook-form"

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

const SignUpIn = () => {
  const classes = useStyles()
  //////////////////////////
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => console.log(data)
  //////////////////////////////

  const [isActive, setActive] = useState("false")
  const handleToggle = () => {
    setActive(!isActive)
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className={classes.root}>
      <div className="signcontainer">
        <SignDrawer></SignDrawer>
        <div
          style={isActive ? { top: "10%" } : { top: "25%" }}
          class="formcontainer"
        >
          {isActive ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* 2) TextField */}
              <TextField
                placeholder="Enter Your  Name"
                label=" Name"
                variant="outlined"
                fullWidth
                className={classes.inputField}
                name="Name"
                inputRef={register({
                  required: " Name is required.",
                })}
                error={Boolean(errors.Name)}
                helperText={errors.Name?.message}
              />

              {/* 3) TextField */}
              <TextField
                placeholder="Enter Your E-mail Address"
                label="E-mail"
                variant="outlined"
                fullWidth
                className={classes.inputField}
                name="email"
                inputRef={register({
                  required: "E-mail Address is required.",
                })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
              />

              {/* 4) TextField */}
              <TextField
                placeholder="Enter Your Phone Number"
                label="Phone"
                variant="outlined"
                fullWidth
                className={classes.inputField}
                name="phone"
                inputRef={register({
                  required: "Phone Number is required.",
                })}
                error={Boolean(errors.phone)}
                helperText={errors.phone?.message}
              />

              {/* 1) password */}
              <TextField
                placeholder="Enter Your password"
                label="Password"
                variant="outlined"
                fullWidth
                className={classes.inputField}
                name="password"
                type="password"
                inputRef={register({
                  required: "Password is required.",
                })}
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
              />

              {/* Checkbox */}
              <FormControl
                error={Boolean(errors.tnc)}
                style={{ display: "block", marginBottom: 15 }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      name="tnc"
                      inputRef={register({
                        required: "please aggree our terms and condtions",
                      })}
                    />
                  }
                  label="I aggree all terms and conditions"
                />
                <FormHelperText>{errors.tnc?.message}</FormHelperText>
              </FormControl>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.radius}
              >
                créer un compte
              </Button>
            </form>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* 3) TextField */}
              <TextField
                placeholder="Enter Your E-mail Address"
                label="E-mail"
                variant="outlined"
                fullWidth
                className={classes.inputField}
                name="email"
                inputRef={register({
                  required: "E-mail Address is required.",
                })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
              />

              <TextField
                placeholder="Enter Your password"
                label="Password"
                variant="outlined"
                fullWidth
                className={classes.inputField}
                name="password"
                type="password"
                inputRef={register({
                  required: "Password is required.",
                })}
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
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
          )}
        </div>

        {/* </div> */}
        {/* <div className="container sign-up-mode">
        <div class="panels-container"> */}
        <div>
          <div className="panelcontainer">
            {isActive ? (
              <div class="panel">
                <div class="content">
                  <h3>New here ?</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Debitis, ex ratione. Aliquid!
                  </p>

                  <Button
                    variant="outlined"
                    size="large"
                    className={classes.radius}
                    onClick={handleToggle}
                  >
                    Sign up
                  </Button>
                </div>
                <img src="img/log.svg" class="image" alt="" />
              </div>
            ) : (
              <div class="panel">
                <div class="content">
                  <h3>One of us ?</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum laboriosam ad deleniti.
                  </p>

                  <Button
                    variant="outlined"
                    size="large"
                    className={classes.radius}
                    onClick={handleToggle}
                  >
                    Sign in
                  </Button>
                </div>
                <img src="img/register.svg" class="image" alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpIn
