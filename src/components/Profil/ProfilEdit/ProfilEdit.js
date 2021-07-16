import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import {
  Avatar,
  Badge,
  Box,
  Button,
  Checkbox,
  Grid,
  Modal,
  Paper,
  Tooltip,
} from "@material-ui/core"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import { updateUserProfile } from "../../../actions/usersActions"
import Message from "../../utile/Message"
import "./ProfilEdit.css"

const useStyles = makeStyles((theme) => ({
  buttons: {
    color: "white",
    fontWeight: "505",
    borderColor: "black",
    width: "8rem",
    backgroundColor: "darkslategray",
    "&:hover": {
      backgroundColor: "rgba(47, 79, 79, 0.514)",
      borderColor: "transparent",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "43px",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: "81vh",
    width: "55rem",
    marginTop: "2.5rem",
  },
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
  inputField: {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      backgroundColor: "rgba(240, 240, 240, 0.66)",
      // width: 250,
    },
  },
}))

const ProfilEdit = () => {
  const classes = useStyles()

  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails
  console.log("avant set")
  // extract data from redux store and set it to UI
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [firstname, setFirstName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [type, setType] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [description, setDescription] = useState("")
  const [birthday, setBirthDay] = React.useState(
    new Date("2021-08-18T21:11:54")
  )
  console.log("apres set firstname " + firstname)

  const [open, setOpen] = useState(false)

  const handleDateChange = (date) => {
    setBirthDay(date)
  }

  const handleChange = (event) => {
    setType(event.target.value)
  }

  // handle modal button open
  const handleOpen = () => {
    setOpen(true)
    console.log("avant setName in useeffect")

    // if we have the user we set the form field
    setName(user.user["last_name"])
    setEmail(user.user["email"])
    setFirstName(user.user["first_name"])
    setPhoneNumber(user.user["phone"])
    setType(user.user["type"])
    // 4 infos indispo dans l'API
    setAddress(user.user["address"])
    setCity(user.user["city"])
    // setBirthDay(user.user["birthDate"])
    setDescription(user.user["description"])
    console.log("after useeffect")
  }
  // handle modal button close
  const handleClose = () => {
    setOpen(false)
  }

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  // handle form data change
  const submitHandler = (e) => {
    e.preventDefault()
    // condition
    if (password !== confirmPassword) {
      setMessage("Passwords do not match")
    } else {
      // we pass in the new data(from state) we want to update
      dispatch(updateUserProfile({ id: user.user._id, name, email, password }))
    }
  }

  // useEffect(() => {
  //   if () {
  // setName(user.user["last_name"])
  // setEmail(user.user["email"])
  // setFirstName(user.user["first_name"])
  // setPhoneNumber(user.user["phone"])
  // setType(user.user["type"])
  // // 4 infos indispo dans l'API
  // setAddress(user.user["address"])
  // setCity(user.user["city"])
  // // setBirthDay(user.user["birthDate"])
  // setDescription(user.user["description"])
  // console.log("after useeffect")
  //   }
  // }, [user.user])

  return (
    <>
      <Tooltip title="Edit Profile">
        <Button
          className={classes.buttons}
          onClick={handleOpen}
          variant="outlined"
        >
          Edit
        </Button>
      </Tooltip>
      <Modal
        aria-labelledby="transition-modal-title"
        // aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Edit Profil</h2>
            {message && <Message severity="error">{message}</Message>}
            {success && <Message severity="success">Profile Updated</Message>}
            <div className="modal-form">
              <form onSubmit={submitHandler}>
                {/* 2) TextField */}
                <Box display="flex" style={{ gap: "1rem" }}>
                  <Box
                    display="flex"
                    style={{
                      padding: "1rem",
                      gap: "1rem",
                      flexDirection: "column",
                      height: "max-content",
                    }}
                  >
                    <TextField
                      placeholder="Enter Your  Name"
                      label="LastName"
                      variant="outlined"
                      size="small"
                      fullWidth
                      className={classes.inputField}
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      //   style={{ padding: "12.5px 14px" }}
                      name="name"
                    />
                    <TextField
                      placeholder="Enter Your  FirstName"
                      label="FirstName"
                      variant="outlined"
                      size="small"
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
                      size="small"
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
                      size="small"
                      className={classes.inputField}
                      name="phone"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                    />

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Grid container justifyContent="space-around">
                        <KeyboardDatePicker
                          disableToolbar
                          variant="inline"
                          format="MM/dd/yyyy"
                          margin="normal"
                          id="date-picker-inline"
                          label="Birthday"
                          value={birthday}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            "aria-label": "change date",
                          }}
                        />
                      </Grid>
                    </MuiPickersUtilsProvider>

                    <Box
                      display="flex"
                      flexDirection="row"
                      flex="1 0 50%"
                      p={1}
                      m={1}
                    >
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={type}
                        onChange={handleChange}
                      >
                        <MenuItem value={"INVESTOR"}>Investisseur</MenuItem>
                        <MenuItem value={"ENTREPRISE"}>
                          Chef d'entreprise
                        </MenuItem>
                        <MenuItem value={"CONSULTANT"}>Consultant</MenuItem>
                      </Select>
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    style={{
                      padding: "1rem",
                      gap: "1rem",
                      flexDirection: "column",
                      height: "max-content",
                    }}
                  >
                    <TextField
                      placeholder="Enter Your  Address"
                      label="Address"
                      variant="outlined"
                      size="small"
                      fullWidth
                      className={classes.inputField}
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                      name="address"
                    />
                    <TextField
                      placeholder="Enter Your  City"
                      label="City"
                      variant="outlined"
                      fullWidth
                      size="small"
                      className={classes.inputField}
                      onChange={(e) => setCity(e.target.value)}
                      value={city}
                      name="city"
                    />

                    {/* 1) password */}
                    <TextField
                      placeholder="Enter Your password"
                      label="Password"
                      variant="outlined"
                      fullWidth
                      size="small"
                      className={classes.inputField}
                      name="password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                    {/* 1) password */}
                    <TextField
                      placeholder="Enter New password"
                      label="Confirme Password"
                      variant="outlined"
                      fullWidth
                      size="small"
                      className={classes.inputField}
                      name="confirmpassword"
                      type="confirmpassword"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                    />
                    <TextField
                      id="outlined-multiline-static"
                      label="Description"
                      multiline
                      rows={3}
                      defaultValue="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      variant="outlined"
                      className={classes.inputField}
                    />
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={classes.radius}
                >
                  Confirmer les modifications
                </Button>
              </form>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  )
}

export default ProfilEdit
