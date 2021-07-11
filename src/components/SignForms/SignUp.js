import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Select from "@material-ui/core/Select"
import Box from "@material-ui/core/Box"
import MenuItem from "@material-ui/core/MenuItem"
import Message from "../utile/Message"
import Loader from "../utile/Loader"
import { register } from "../../actions/usersActions"
/////////////////////////
import { FormControlLabel, Checkbox, FormControl } from "@material-ui/core"

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

const SignUp = ({ location, history }) => {
  const classes = useStyles()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [firstname, setFirstName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [conditions, setConditions] = useState(false)
  const [type, setType] = useState("CONSULTANT")

  const handleChange = (event) => {
    setType(event.target.value)
  }

  const dispatch = useDispatch()

  // SHOULD CHANGE THIS TO userRegister AFTER FIXING REGISTER BUG
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split("=")[1] : "/"

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(register(firstname, name, email, password, phoneNumber, type))
  }

  return (
    <div>
      {/* if there's an error or if loading */}
      {error && <Message severity="error">{error}</Message>}
      {loading && <Loader />}
      <form onSubmit={submitHandler}>
        {/* 2) TextField */}
        <TextField
          placeholder="Enter Your  Name"
          label="Name"
          variant="outlined"
          fullWidth
          className={classes.inputField}
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
        />
        <TextField
          placeholder="Enter Your  FirstName"
          label="FirstName"
          variant="outlined"
          fullWidth
          className={classes.inputField}
          onChange={(e) => setFirstName(e.target.value)}
          value={firstname}
          name="firstname"
        />

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

        {/* 4) TextField */}
        <TextField
          placeholder="Enter Your Phone Number"
          label="Phone"
          variant="outlined"
          fullWidth
          className={classes.inputField}
          name="phone"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
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
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <Box display="flex" flexDirection="row" flex="1 0 50%" p={1} m={1}>
          {/* Checkbox */}
          <FormControl style={{ display: "block", marginBottom: 15 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={conditions}
                  onChange={(e) => setConditions(e.target.checked)}
                  name="conditions"
                  color="primary"
                />
              }
              label="Conditions d'utilisation"
            />
          </FormControl>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            onChange={handleChange}
          >
            <MenuItem value={"INVESTOR"}>Investisseur</MenuItem>
            <MenuItem value={"ENTREPRISE"}>Chef d'entreprise</MenuItem>
            <MenuItem value={"CONSULTANT"}>Consultant</MenuItem>
          </Select>
        </Box>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.radius}
        >
          créer un compte
        </Button>
      </form>
    </div>
  )
}

export default SignUp
