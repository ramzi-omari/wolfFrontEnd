import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Select from "@material-ui/core/Select"
import Box from "@material-ui/core/Box"
import MenuItem from "@material-ui/core/MenuItem"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers"
import MomentUtils from "@date-io/moment"
import moment from "moment"
import Message from "../utile/Message"
import Loader from "../utile/Loader"
import { register } from "../../actions/usersActions"
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
    backgroundColor: "#202020",
    // borderWidth: "2px",
    "&:hover": {
      backgroundColor: "rgba(20, 20, 20, 0.514)",
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
  const [selectedDate, setDate] = useState(moment())
  const [birthDate, setBirthDate] = useState(moment().format("YYYY-MM-DD"))

  const onDateChange = (date, value) => {
    setDate(date)
    setBirthDate(value)
    console.log("setbirthdate: " + setBirthDate)
    console.log("setDate: " + setDate)
    console.log("date: " + date)
    console.log("value: " + value)
  }
  const dateFormatter = (str) => {
    return str
  }

  const handleChange = (event) => {
    setType(event.target.value)
  }

  const dispatch = useDispatch()

  // const userLogin = useSelector((state) => state.userLogin)
  // const LSuserinfo = localStorage.getItem("userInfo")
  // console.log("LSuserinfo " + LSuserinfo)

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const submitHandler = (e) => {
    e.preventDefault()
    // HANDLE ELEMENTS MANQUANTS
    if (!conditions) {
      alert("règlement")
    } else {
      dispatch(
        register(firstname, name, email, birthDate, password, phoneNumber, type)
      )
    }
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

        <Box
          display="flex"
          flexDirection="row"
          flex="1 0 50%"
          m={1}
          style={{ gap: "1rem" }}
        >
          <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
            <KeyboardDatePicker
              //disableToolbar
              margin="normal"
              label="Birthday"
              autoOk={true}
              showTodayButton={true}
              value={selectedDate}
              format="YYYY-MM-DD"
              inputValue={birthDate}
              onChange={onDateChange}
              rifmFormatter={dateFormatter}
            />
          </MuiPickersUtilsProvider>
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
        {/* Checkbox */}
        <FormControl style={{ display: "block" }}>
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
