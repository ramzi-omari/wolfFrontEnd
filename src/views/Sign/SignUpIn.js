import React, { useEffect, useState } from "react"
// import { Link } from "react-router-dom"
// import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import SignDrawer from "../../components/fixed/SignDrawer"
import SignUp from "../../components/SignForms/SignUp"
import SignIn from "../../components/SignForms/SignIn"
import "./SignUpIn.css"
import { useSelector } from "react-redux"

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
    backgroundColor: "#6b6b6b",
    // borderWidth: "2px",
    "&:hover": {
      backgroundColor: "rgba(70, 70, 70, 0.514)",
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

const SignUpIn = ({ location, history }) => {
  const classes = useStyles()

  const [isActive, setActive] = useState("false")
  const handleToggle = () => {
    setActive(!isActive)
  }

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  return (
    <div className={classes.root}>
      <div className="signcontainer container">
        <SignDrawer></SignDrawer>
        {/* formulaire */}
        <div
          style={isActive ? { top: "10%" } : { top: "25%" }}
          className="formcontainer"
        >
          {isActive ? (
            <SignUp location={location} history={history}></SignUp>
          ) : (
            <SignIn location={location} history={history}></SignIn>
          )}
        </div>

        {/* ecriture */}
        <div>
          <div className="panelcontainer">
            {isActive ? (
              <div className="panel">
                <div className="content">
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
                <img src="img/log.svg" className="image" alt="" />
              </div>
            ) : (
              <div className="panel">
                <div className="content">
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
                <img src="img/register.svg" className="image" alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpIn
