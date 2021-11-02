import * as React from "react"
import PropTypes from "prop-types"
import Avatar from "@material-ui/core/Avatar"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemText from "@material-ui/core/ListItemText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Dialog from "@material-ui/core/Dialog"
import AddIcon from "@mui/icons-material/Add"
import PersonIcon from "@material-ui/icons/Person"
import Typography from "@material-ui/core/Typography"
import { blue } from "@material-ui/core/colors"
import Loader from "../utile/Loader"
import { useHistory } from "react-router"

export function SimpleDialog(props) {
  const { onClose, open, data, loading } = props
  const history = useHistory()

  const handleClose = () => {
    onClose()
  }

  const handleListItemClick = (value) => {
    history.push("/Journal")
  }

  return (
    <Dialog
      style={{
        bottom: "unset",
        top: "calc(10vh - 30px)",
        left: "unset",
      }}
      onClose={handleClose}
      open={open}
    >
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {loading && <Loader />}
        {data &&
          data.notifications &&
          Array.from(data.notifications).map((item, index) => (
            <ListItem
              button
              onClick={() => handleListItemClick(item)}
              key={item._id}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.message} />
            </ListItem>
          ))}
      </List>
    </Dialog>
  )
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
}
