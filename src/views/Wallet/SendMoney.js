import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Button, TextField } from "@material-ui/core"

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

const SendMoney = () => {
  const classes = useStyles()

  return (
    <div>
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
    </div>
  )
}

export default SendMoney
