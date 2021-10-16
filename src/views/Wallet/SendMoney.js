import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Button, TextField } from "@material-ui/core"
import SearchDestinationUser from "./SearchDestinationUser"
import axios from "axios"
import { postTransaction } from "../../actions/transactionsActions"
import Message from "../../components/utile/Message"

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

  const [destinataireID, setDestinataireID] = useState("")
  const [amount, setAmount] = useState("")
  const [password, setPassword] = useState("")
  const [raison, setRaison] = useState("")
  const [transactionSuccess, setTransactionSuccess] = useState(false)

  const { userInfo } = useSelector((state) => state.userLogin)
  const { token } = userInfo

  const dispatch = useDispatch()

  useEffect(() => {}, [destinataireID])

  // VERIFY PASSWORD & POST Transaction
  const verifyPassword = (password) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }

    axios
      .post(
        `${process.env.REACT_APP_API_KEY}/password/check`,
        { password },
        config
      )
      .then((response) => {
        if (response.data.message === "CORRECT_PASSWORD") {
          dispatch(postTransaction(amount, destinataireID, raison))
          setAmount("")
          setRaison("")
          setPassword("")
          setTransactionSuccess(true)
        } else {
          alert("WRONG PASSWORD")
          setTransactionSuccess(false)
        }
      })
      .catch((error) => {
        console.log("erreuur", error)
        setTransactionSuccess(false)
      })
  }

  const onClickHandler = () => {
    if (password && amount && destinataireID && raison) {
      verifyPassword(password)
    } else {
      alert("veuillez remplir toutes les taches correctement")
    }
  }

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
        {transactionSuccess && (
          <Message severity="success">Transaction Done</Message>
        )}
        <TextField
          placeholder="Le montant à envoyer"
          label="Montant - DA"
          variant="outlined"
          size="small"
          type="number"
          fullWidth
          className={classes.inputField}
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          //   style={{ padding: "12.5px 14px" }}
          name="amount"
        />

        <SearchDestinationUser
          setDestinataireID={setDestinataireID}
        ></SearchDestinationUser>
        {/* 4) TextField */}
        <TextField
          placeholder="Confirmez votre mot de passe"
          label="Confirmez votre mot de passe"
          type="password"
          variant="outlined"
          fullWidth
          size="small"
          className={classes.inputField}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <TextField
          id="outlined-multiline-static"
          label="La raison de l'envoie"
          multiline
          rows={3}
          placeholder="La raison de l'envoie"
          //defaultValue="Description"
          value={raison}
          onChange={(e) => setRaison(e.target.value)}
          inputProps={{
            maxLength: 25,
          }}
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
          onClick={onClickHandler}
        >
          Confirmez
        </Button>
      </Box>
    </div>
  )
}

export default SendMoney
