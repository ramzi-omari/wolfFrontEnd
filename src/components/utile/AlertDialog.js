import * as React from "react"
import Button from "@material-ui/core/Button/Button"
import Dialog from "@material-ui/core/Dialog/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

export default function AlertDialog({
  descriptionDialog,
  dialogTitle,
  onCloseDialog,
  openDialog,
  onClickHandler,
}) {
  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={onCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {descriptionDialog}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseDialog}>Cancel</Button>
          <Button
            onClick={() => {
              onCloseDialog()
              onClickHandler()
            }}
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
