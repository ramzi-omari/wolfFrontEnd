import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import "../SignUpIn.css"

const useStyles = makeStyles((theme) => ({
  radius: {
    borderRadius: 20,
    paddingLeft: "2rem",
    paddingRight: "2rem",
    borderColor: "#fff",
    color: "#f1f1f1",
    fontWeight: 600,
    borderWidth: "2px",
    "&:hover": {
      backgroundColor: "rgb(7, 10, 10, 0.42)",
      borderColor: "transparent",
    },
  },

  root: {
    "& .MuiInputLabel-outlined": {
      color: "black",
    },
    "& label.Mui-focused": {
      color: "white",
      fontWeight: 600,
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "rgba(240, 240, 240, 0.66)",
      borderRadius: 20,
      width: 370,
      "&:hover fieldset": {
        borderColor: "white",
      },

      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
}))

const SignUpIn = () => {
  const classes = useStyles()
  const [isActive, setActive] = useState("false")
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <div className={classes.root}>
      <div className={isActive ? "container" : "container sign-up-mode"}>
        <div class="forms-container">
          <div class="signin-signup">
            <form action="#" class="sign-in-form">
              <h2 class="title">Sign in</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" class="btn solid" />
              {/* <p class="social-text">Or Sign in with social platforms</p>
              <div class="social-media">
                <a href="#" class="social-icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-google"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div> */}
            </form>
            <form action="#" class="sign-up-form">
              <h2 class="title">Sign up</h2>
              <div>
                <TextField
                  required
                  id="filled-required"
                  label="Nom"
                  variant="outlined"
                />
              </div>
              <div>
                <TextField
                  required
                  id="filled-required"
                  label="Email"
                  type="email"
                  variant="outlined"
                />
              </div>
              <div>
                <TextField
                  required
                  id="filled-required"
                  label="Mot de passe"
                  type="password"
                  variant="outlined"
                />
              </div>
              <TextField
                required
                id="filled-required"
                label="Username"
                variant="outlined"
              />

              <input type="submit" class="btn" value="Sign up" />
              {/* <p class="social-text">Or Sign up with social platforms</p>
              <div class="social-media">
                <a href="#" class="social-icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-google"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div> */}
            </form>
          </div>
        </div>

        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              {/* <button
                class="btn transparent"
                id="sign-up-btn"
                onClick={handleToggle}
              >
                Sign up
              </button> */}
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
          <div class="panel right-panel">
            <div class="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              {/* <button
                class="btn transparent"
                id="sign-in-btn"
                onClick={handleToggle}
              >
                Sign in
              </button> */}
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
        </div>
      </div>
    </div>
  )
}

export default SignUpIn
