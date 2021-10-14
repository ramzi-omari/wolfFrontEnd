import {
  Box,
  Button,
  IconButton,
  makeStyles,
  Modal,
  TextField,
} from "@material-ui/core"
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
// import SearchIcon from "@mui/icons-material/Search"
import SearchIcon from "@material-ui/icons/Search"
import axios from "axios"
import { SearchOutlined } from "@material-ui/icons"

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
}))

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

const SearchDestinationUser = ({ setDestinataireID }) => {
  const classes = useStyles()
  const [users, setUsers] = useState([])
  const [name, setName] = useState([])
  const [open, setOpen] = useState(false)

  const { userInfo } = useSelector((state) => state.userLogin)
  const { token } = userInfo

  // get USERS from Search API
  const onChangeHandler = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }

    if (name && name.length > 0) {
      const getSearchedUsers = () => {
        axios
          .get(
            `${process.env.REACT_APP_API_KEY}/users/search?search=${name}`,
            config
          )
          .then((response) => {
            setUsers(response.data.users)
          })
          .catch((error) => console.log("err", error))
      }
      getSearchedUsers()
      setOpen(true)
    }
  }

  const onSuggestHandler = (text) => {
    setName(text.first_name + " " + text.last_name)
    setDestinataireID(text._id)
    setOpen(false)

    setUsers([])
  }

  // refresh / sideEffect
  useEffect(() => {}, [users])

  const handleClose = () => {
    setOpen(false)
    setUsers([])
  }

  return (
    <>
      <TextField
        placeholder="Name or FirstName or Email or Phone"
        label="Destinataire"
        variant="outlined"
        size="small"
        fullWidth
        className={classes.inputField}
        name="destinataire"
        onChange={(e) => setName(e.target.value)}
        value={name}
        InputProps={{
          endAdornment: (
            <IconButton onClick={onChangeHandler}>
              <SearchOutlined />
            </IconButton>
          ),
        }}
      ></TextField>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>{users.length === 0 ? "User not found" : null}</div>
          {users &&
            users.map((user, i) => (
              <div
                style={{
                  borderBottom: "1px solid  gray",
                  marginBottom: "0.5rem",
                }}
                key={i}
                onClick={() => onSuggestHandler(user)}
              >
                <div style={{ color: "#707070", fontSize: "0.7rem" }}>
                  {user.email} (PHOTO)
                </div>
                <div>
                  {user.first_name} {user.last_name}
                </div>
              </div>
            ))}
        </Box>
      </Modal>
    </>
  )
}

export default SearchDestinationUser
