import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import { DataGrid } from "@mui/x-data-grid"
import { Avatar, Button, Modal } from "@material-ui/core"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import SendIcon from "@material-ui/icons/Send"
import {
  cancelTransaction,
  getTransactions,
} from "../../actions/transactionsActions"
import moment from "moment"
import AlertDialog from "../../components/utile/AlertDialog"
import { Rating } from "@material-ui/lab"
import { createConversation } from "../../actions/ChatActions.js/createConversationAction"
import { getConversations } from "../../actions/ChatActions.js/conversationActions"
import Message from "../../components/utile/Message"
import { createConversationsReset } from "../../Slices/createConversationSlice"
import Loader from "../../components/utile/Loader"

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
    width: "40%",
    marginTop: "2.5rem",
    minWidth: 400,
    maxWidth: 600,
    maxHeight: 600,
    overflowY: "scroll",
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

const columns = [
  {
    field: "profilePic",
    headerName: "profilepic",
    width: 140,
    hide: false,
    renderCell: (params) => {
      return (
        <div className="rowitem" style={{ margin: "auto" }}>
          <Avatar
            alt="s"
            src={params.row.profilePictureUrl}
            style={{
              width: "95px",
              height: "95px",
              margin: "auto",
              borderRadius: "20px",
              margin: "2px",
            }}
          />
        </div>
      )
    },
  },
  {
    field: "fullName",
    headerName: "Full Name",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="rowitem">
          {params.row.last_name} {params.row.first_name}
        </div>
      )
    },
  },

  {
    field: "type",
    headerName: "type",
    description: "Member type",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="rowitem" style={{ textTransform: "lowercase" }}>
          {params.row.type}
        </div>
      )
    },
  },
  {
    field: "rating",
    headerName: "rating",
    width: 130,
    hide: false,
    renderCell: (params) => {
      return (
        <div className="rowitem">
          <Rating name="disabled" value={params.row.rating} disabled />
        </div>
      )
    },
  },

  {
    field: "tag",
    headerName: "tag",
    description: "Member domain",
    width: 150,
  },
  {
    field: "description",
    headerName: "description",
    description: "status de la transaction",
    width: 150,
    hide: true,
  },
]

export default function ListMembers({ members }) {
  const classes = useStyles()

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const [open, setOpen] = useState(false)
  const [fullName, setFullName] = useState("")
  const [rating, setRating] = useState("")
  const [tag, setTag] = useState([])
  const [description, setDescription] = useState("")
  const [type, setType] = useState("")
  const [profilePictureUrl, setProfilePictureUrl] = useState("")
  const [userID, setUserID] = useState("")

  const [sendMsg, setSendMsg] = useState(false)
  const [newMessage, setNewMessage] = useState("")

  // open modal depend on Row click
  const handleOnClick = (row) => {
    setFullName(row.last_name + " " + row.first_name)
    setRating(row.rating)
    setTag(row.tag)
    setDescription(row.description)
    setType(row.type)
    setProfilePictureUrl(row.profilePictureUrl)
    setUserID(row._id)
    setOpen(true)
  }
  // handle modal button close
  const handleClose = () => {
    setOpen(false)
    setSendMsg(false)
    setNewMessage("")
    dispatch(getConversations())
    dispatch(createConversationsReset())
  }

  const createConver = useSelector((state) => state.createConver)
  const { loading, error, createConvo } = createConver

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createConversation(userID, newMessage))
    // This will run after 8 second!
    // if (Object.keys(createConvo).length !== 0) {
    //   const timer = setTimeout(() => {
    //     dispatch(getConversations())
    //   }, 8000)

    //   return () => clearTimeout(timer)
    // }
  }

  return (
    <div style={{ height: 570, width: "100%" }}>
      <DataGrid
        rows={members}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        rowHeight={100}
        onRowClick={(param) => handleOnClick(param.row)}
      />

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
            <h2 id="transition-modal-title">Transaction Details</h2>
            <div
              className="modal-form"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "start",
                marginTop: "1rem",
              }}
            >
              <div>
                <h5>
                  <strong>Member Details:</strong>
                </h5>
                <h5>
                  <strong>Type:</strong> {type}
                </h5>
                <h5>
                  <strong>Full Name:</strong> {fullName}
                </h5>
                <h5>
                  <strong>Rating: </strong>
                  <Rating name="disabled" value={rating} disabled />
                </h5>
                <h5>
                  <strong>Tags:</strong> {tag} tst
                </h5>
                <h5>
                  <strong>Description:</strong> {description} tst
                </h5>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div style={{ marginTop: "0.2rem" }}>
                  <div
                    className="sendMsg"
                    style={{ marginBottom: "0.3rem" }}
                    onClick={() => setSendMsg(!sendMsg)}
                  >
                    <Button className={classes.buttons} variant="outlined">
                      Contacter
                    </Button>
                  </div>
                  <div className="Transaction">
                    <Button className={classes.buttons} variant="outlined">
                      Faire une Transaction
                    </Button>
                  </div>
                </div>
                <div className="photo" style={{ height: "100px" }}>
                  {" "}
                  {/* <img
                    style={{ height: "inherit" }}
                    src={}
                  ></img> */}
                  <Avatar
                    alt="s"
                    src={profilePictureUrl}
                    style={{
                      height: "inherit",
                      width: "inherit",
                      // margin: "auto",
                      borderRadius: "10px",
                      // margin: "2px",
                    }}
                  />
                </div>
              </div>
            </div>
            {sendMsg ? (
              <div className="chatBoxBottom">
                <textarea
                  className="chatMessageInput"
                  placeholder="write something..."
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                ></textarea>
                <SendIcon
                  style={{
                    width: "9%",
                    height: "34px",
                    cursor: "pointer",
                  }}
                  onClick={handleSubmit}
                ></SendIcon>
              </div>
            ) : null}
            {loading && <Loader />}
            {Object.keys(createConvo).length !== 0 ? (
              <Message severity="success">Message Sent</Message>
            ) : null}

            {error && <Message severity="error">{error.fr}</Message>}
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
