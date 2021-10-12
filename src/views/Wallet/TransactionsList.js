import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import { DataGrid } from "@mui/x-data-grid"
import { Modal } from "@material-ui/core"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import { getTransactions } from "../../actions/transactionsActions"
import moment from "moment"

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
    field: "to",
    headerName: "Receiver",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="rowitem">
          {params.row.to.last_name} {params.row.to.first_name}
        </div>
      )
    },
  },
  {
    field: "motif",
    headerName: "motif",
    width: 150,
    hide: true,
  },
  {
    field: "updated_at",
    headerName: "date",
    width: 150,
    hide: true,
  },
  {
    field: "from",
    headerName: "Sender",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="rowitem">
          {params.row.from.last_name} {params.row.from.first_name}
        </div>
      )
    },
  },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    description: "le montant de la transaction en Dinar Algerien",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    description: "status de la transaction",
    width: 150,
  },
]

export default function TransactionsList({ transactions }) {
  const classes = useStyles()

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const [open, setOpen] = useState(false)
  const [tranFrom, setTranFrom] = useState("")
  const [tranTo, setTranTo] = useState("")
  const [tranDate, setTranDate] = useState("")
  const [tranMotif, setTranMotif] = useState("")
  const [tranAmount, setTranAmount] = useState("")
  const [tranStatus, setTranStatus] = useState("")

  // open modal depend on Row click
  const handleOnClick = (row) => {
    console.log("llol " + row)
    //alert("navigation")
    setTranFrom(row.from.last_name + " " + row.from.first_name)
    setTranTo(row.to.last_name + " " + row.to.first_name)
    setTranDate(row.updated_at)
    setTranMotif(row.motif)
    setTranAmount(row.amount)
    setTranStatus(row.status)
    setOpen(true)
  }
  // handle modal button close
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={transactions}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
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
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <div>
                <h5>
                  <strong>Transaction Details:</strong>
                </h5>
                <h5>
                  <strong>From:</strong> {tranFrom}
                </h5>
                <h5>
                  <strong>To:</strong> {tranTo}
                </h5>
                <h5>
                  <strong>Date:</strong>{" "}
                  {moment(tranDate).format("YYYY-MM-DD LT")}
                </h5>
                <h5>
                  <strong>Motif:</strong> {tranMotif}
                </h5>
                <h5>
                  <strong>Amount:</strong> {tranAmount} DA
                </h5>
              </div>
              <div>
                {tranStatus === "CANCELED" ? (
                  <h5
                    style={{
                      color: "red",
                      border: "1px solid #ff000096",
                      width: "min-content",
                      padding: "1rem",
                    }}
                  >
                    <strong>{tranStatus}</strong>
                  </h5>
                ) : (
                  <h5
                    style={{
                      color: "green",
                      border: "1px solid #00800096",
                      width: "min-content",
                      padding: "1rem",
                    }}
                  >
                    <strong>{tranStatus}</strong>
                  </h5>
                )}
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
