import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import { DataGrid } from "@mui/x-data-grid"
import { Modal } from "@material-ui/core"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"

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

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "to",
    headerName: "Receiver",
    width: 150,
    // editable: true,
  },
  {
    field: "from",
    headerName: "Sender",
    width: 150,
  },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 150,
    valueGetter: (params) =>
      `${params.getValue(params.id, "to") || ""} ${
        params.getValue(params.id, "from") || ""
      }`,
  },
]

const rows = [
  { id: 1, from: "Snow", to: "Jon", amount: 35 },
  { id: 2, from: "Lannister", to: "Cersei", amount: 42 },
  { id: 3, from: "Lannister", to: "Jaime", amount: 45 },
  { id: 4, from: "Stark", to: "Arya", amount: 16 },
  { id: 5, from: "Targaryen", to: "Daenerys", amount: null },
  { id: 6, from: "Melisandre", to: null, amount: 150 },
  { id: 7, from: "Clifford", to: "Ferrara", amount: 44 },
  { id: 8, from: "Frances", to: "Rossini", amount: 36 },
  { id: 9, from: "Roxie", to: "Harvey", amount: 65 },
]

export default function TransactionsList() {
  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const [test, settest] = useState("")
  const [test2, settest2] = useState("")

  // open modal depend on Row click
  const handleOnClick = (row) => {
    console.log("llol " + row)
    //alert("navigation")
    settest(row.from)
    settest2(row.to)
    setOpen(true)
  }
  // handle modal button close
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
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
            <div className="modal-form">
              <h5>details</h5>
              <h5>
                Transaction made From: {test} To: {test2}
              </h5>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
