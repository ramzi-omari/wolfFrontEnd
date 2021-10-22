import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Autocomplete from "@material-ui/lab/Autocomplete"
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
  KeyboardDatePicker,
} from "@material-ui/pickers"
import MomentUtils from "@date-io/moment"
import moment from "moment"
import {
  updateUserProfile,
  getUserDetails,
} from "../../../actions/usersActions"
import Message from "../../utile/Message"
import "./ProfilEdit.css"
import DropImage from "./DropImage"

const useStyles = makeStyles((theme) => ({
  buttons: {
    color: "white",
    fontWeight: "505",
    borderColor: "black",
    width: "10.1em",
    padding: "7px 0px",
    // backgroundColor: "darkslategray",
    backgroundColor: "#202020",
    "&:hover": {
      // backgroundColor: "rgba(47, 79, 79, 0.514)",
      backgroundColor: "rgba(20, 20, 20, 0.514)",
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
    height: "auto",
    width: "60%",
    marginTop: "2.5rem",
  },
  radius: {
    borderRadius: 20,
    paddingLeft: "2rem",
    paddingRight: "2rem",
    color: "#f1f1f1",
    fontWeight: 600,
    backgroundColor: "#202020",
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

const ProfilEdit = ({ user }) => {
  const classes = useStyles()

  const [message, setMessage] = useState(null)
  const [open, setOpen] = useState(false)

  const [last_name, setName] = useState("")
  const [first_name, setFirstName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [city, setCity] = useState("")
  const [description, setDescription] = useState("")
  const [tag, setTag] = useState([])
  const [profilePictureUrl, setProfilePictureUrl] = useState("")

  //
  const [selectedDate, setDate] = useState(moment())
  const [birthDate, setBirthDate] = useState(moment().format("YYYY-MM-DD"))

  const onDateChange = (date, value) => {
    setDate(date)
    setBirthDate(value)
  }
  const dateFormatter = (str) => {
    return str
  }

  const dispatch = useDispatch()

  // const userDetails = useSelector((state) => state.userDetails)
  // const { loading, error, user } = userDetails

  useEffect(() => {
    if (!user) {
      //  dispatch(getUserDetails())
      //  console.log("second")
    } else {
      // if we have the user we set the form field
      setName(user["last_name"])
      setFirstName(user["first_name"])
      setPhoneNumber(user["phone"])
      setCity(user["city"])
      setBirthDate(moment(user["birthDate"]).format("YYYY-MM-DD"))
      setDescription(user["description"])
      setTag(user["tag"])
    }
  }, [dispatch, user])

  // handle modal button open
  const handleOpen = () => {
    setOpen(true)
  }
  // handle modal button close
  const handleClose = () => {
    setOpen(false)
    setProfilePictureUrl("")
  }
  // const [success, setSuccess] = useState(false)

  // const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  // const { success } = userUpdateProfile
  const { loading, error, updateSuccess, userDetails } = useSelector(
    (state) => state.userDetails
  )

  // handle form data change
  const submitHandler = (e) => {
    e.preventDefault()
    // we pass in the new data(from state) we want to update
    setMessage(null)
    dispatch(
      updateUserProfile({
        last_name,
        first_name,
        birthDate,
        phoneNumber,
        city,
        description,
        tag,
        profilePictureUrl,
      })
    )
  }

  const onTagsChange = (value) => {
    setTag(value)
  }

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
            {updateSuccess && (
              <Message severity="success">Profile Updated</Message>
            )}
            <div className="modal-form">
              <form
                onSubmit={submitHandler}
                style={{ gap: "1rem", margin: "1rem", padding: "0rem" }}
              >
                {/* 2) TextField */}
                <Box
                  display="flex"
                  style={{
                    gap: "1rem",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    display="flex"
                    style={{
                      padding: "1rem",
                      gap: "1rem",
                      flexDirection: "column",
                      height: "max-content",
                      width: "50%",
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
                      value={last_name}
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
                      value={first_name}
                      name="firstname"
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
                  </Box>
                  <Box
                    display="flex"
                    style={{
                      padding: "1rem",
                      gap: "1rem",
                      flexDirection: "column",
                      height: "max-content",
                      width: "50%",
                    }}
                  >
                    <MuiPickersUtilsProvider
                      libInstance={moment}
                      utils={MomentUtils}
                    >
                      <KeyboardDatePicker
                        //disableToolbar
                        //margin="normal"

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

                    <Autocomplete
                      multiple
                      id="tags-standard"
                      options={listTags}
                      getOptionLabel={(option) => option}
                      defaultValue={[listTags[0]]}
                      value={tag}
                      size="small"
                      // onChange={onTagsChange}
                      onChange={(event, newValue) => {
                        onTagsChange(newValue)
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          label="Tags de spécialités"
                          placeholder="Spécialités"
                        />
                      )}
                    />
                    <DropImage setImageLink={setProfilePictureUrl}></DropImage>
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

const listTags = [
  "informatique",
  "droit",
  "eco",
  // { title: "Informatique" },
  // { title: "Droit" },
  // { title: "Economie: Part II" },
  // { title: "Electronique"},
  // { title: "Immobilier", year: 1957 },
  // { title: "Génie Civil", year: 1993 },
]
