import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import {
  Avatar,
  Badge,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
} from "@material-ui/core"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import Tooltip from "@material-ui/core/Tooltip"
import "./Profil.css"
import ProfilEdit from "./ProfilEdit/ProfilEdit"
import { getUserDetails } from "../../actions/usersActions"
import moment from "moment"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "105%",
    },
  },
  large: {
    width: "100%",
    height: "60%",
  },
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
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

const Profil = ({ history, lol }) => {
  const classes = useStyles()
  console.log("loooo", lol)

  const [email, setEmail] = useState("")
  const [lastname, setLastName] = useState("")
  const [firstname, setFirstName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [description, setDescription] = useState("")
  const [type, setType] = useState("")
  const [tag, setTag] = useState("")
  const [city, setCity] = useState("")
  const [birthday, setBirthDay] = useState(moment().format("YYYY-MM-DD"))
  const [profilePic, setProfilePic] = useState("")

  const dispatch = useDispatch()

  const { loading, error, userDetails } = useSelector(
    (state) => state.userDetails
  )
  const { success, user } = userDetails

  // check if the user isn't logged in
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!user) {
      dispatch(getUserDetails())
    } else {
      // if we have the user we set the form field
      setLastName(user["last_name"])
      setEmail(user["email"])
      setFirstName(user["first_name"])
      setPhoneNumber(user["phone"])
      // 4 infos indispo dans l'API
      setCity(user["city"])
      setType(user["type"])
      setTag(user["tag"])
      setBirthDay(moment(user["birthDate"]).format("YYYY-MM-DD"))
      setProfilePic(user["profilePictureUrl"])
      setDescription(user["description"])
    }
  }, [user])

  return (
    <Grid className={classes.root}>
      <Paper
        style={{
          borderRadius: "30px",
          width: "90%",
          margin: "auto",
          marginTop: "15px",
        }}
      >
        <div className="profil">
          <Box display="flex" style={{ padding: "1rem", gap: "1rem" }}>
            <Box
              display="flex"
              style={{ flexDirection: "column", width: "20%" }}
            >
              <Avatar
                src={
                  profilePic
                    ? profilePic
                    : "../../img/676-6764065_default-profile-picture-transparent-hd-png-download.png"
                }
                className={classes.large}
              />
              <h3>
                {lastname} {firstname}
              </h3>
              <h5>{birthday}</h5>
            </Box>
            <Box
              display="flex"
              style={{
                flexDirection: "column",
                textAlign: "start",
                width: "50%",
              }}
            >
              <h5>{email}</h5>
              <h5>City: {city}</h5>
              <h5>Phone: {phoneNumber}</h5>
              <h5>{type}</h5>
              <h5>{tag && tag.map((e) => " #" + e)}</h5>
              <TextField
                id="outlined-multiline-static"
                label="Description"
                className={classes.txtfield}
                multiline
                disabled
                rows={3}
                value={description}
                defaultValue="Description"
                variant="outlined"
              />
            </Box>
            <Box
              display="flex"
              style={{
                flexDirection: "column",
                gap: "1rem",
                textAlign: "start",
                justifyContent: "start",
                width: "25%",
                alignItems: "center",
              }}
            >
              <ProfilEdit user={user}></ProfilEdit>
              <Tooltip title="Credit">
                <Button className={classes.buttons} variant="outlined">
                  $ 50
                </Button>
              </Tooltip>
              <Button className={classes.buttons} variant="outlined">
                Mot de passe
              </Button>
            </Box>
          </Box>
        </div>
      </Paper>
    </Grid>
  )
}

export default Profil
