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
import "./Wallet.css"

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
    height: "auto",
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

const Wallet = ({ history }) => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const [email, setEmail] = useState("")
  const [lastname, setLastName] = useState("")
  const [firstname, setFirstName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const dispatch = useDispatch()

  const { loading, error, userDetails } = useSelector(
    (state) => state.userInformations
  )
  const { success, user } = userDetails

  // check if the user isn't logged in
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  // console.log("history: " + history.location)
  // console.log("locat : " + window.location)

  useEffect(() => {
    // dispatch INFOS wallet
  }, [])

  const handleOpen = () => {
    setOpen(!open)
  }

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
        <div className="wallet">
          <Box display="flex" style={{ padding: "1rem", gap: "1rem" }}>
            <Box
              display="flex"
              style={{ flexDirection: "column", width: "20%" }}
            >
              <Avatar
                src="data:image/jpeg;base64,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"
                className={classes.large}
              />
              {/* <h3>
                {lastname} {firstname}
              </h3> */}
              {/* <h5>{birthday}</h5> */}
            </Box>
            <Box
              display="flex"
              style={{
                flexDirection: "column",
                textAlign: "start",
                width: "50%",
              }}
            >
              <h5 className="wallet-sold">Your Sold: $50 </h5>
              {/* <h5>City: {city}</h5> */}
              {/*<h5>Phone: {phoneNumber}</h5>
              <h5>{type}</h5>
              <h5>#{tag}</h5> */}
            </Box>
            <Box
              display="flex"
              style={{
                flexDirection: "column",
                gap: "1rem",
                textAlign: "start",
                justifyContent: "center",
                width: "25%",
                alignItems: "center",
              }}
            >
              <Tooltip title="Send Money">
                <Button
                  className={classes.buttons}
                  variant="outlined"
                  onClick={handleOpen}
                >
                  Send Money
                </Button>
              </Tooltip>
            </Box>
          </Box>
        </div>
        {!open ? null : (
          <Box
            display="flex"
            style={{
              paddingBottom: "1rem",
              flexDirection: "column",
              height: "max-content",
              margin: "auto",
              width: "50%",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              placeholder="Le montant à envoyer"
              label="Montant - DA"
              variant="outlined"
              size="small"
              type="number"
              fullWidth
              className={classes.inputField}
              // onChange={(e) => setName(e.target.value)}
              // value={last_name}
              //   style={{ padding: "12.5px 14px" }}
              name="amount"
            />
            <TextField
              placeholder="Destinataire"
              label="Destinataire"
              variant="outlined"
              size="small"
              fullWidth
              className={classes.inputField}
              // onChange={(e) => setFirstName(e.target.value)}
              // value={first_name}
              name="destinataire"
            />

            {/* 4) TextField */}
            <TextField
              placeholder="Confirmez votre mot de passe"
              label="Confirmez votre mot de passe"
              type="password"
              variant="outlined"
              fullWidth
              size="small"
              className={classes.inputField}
              name="phone"
              // onChange={(e) => setPhoneNumber(e.target.value)}
              // value={phoneNumber}
            />
            <TextField
              id="outlined-multiline-static"
              label="La raison de l'envoie"
              multiline
              rows={3}
              placeholder="La raison de l'envoie"
              //defaultValue="Description"
              // value={description}
              // onChange={(e) => setDescription(e.target.value)}
              variant="outlined"
              className={classes.inputField}
            />
            <Button
              className={classes.buttons}
              variant="outlined"
              style={{
                margin: "auto",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Confirmez
            </Button>
          </Box>
        )}
      </Paper>
    </Grid>
  )
}

export default Wallet
