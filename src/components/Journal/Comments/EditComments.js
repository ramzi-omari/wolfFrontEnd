import { Box, Input, Modal, Tooltip } from "@material-ui/core"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { editComment } from "../../../actions/commentsActions"
import EditIcon from "@material-ui/icons/Edit"
import SendIcon from "@material-ui/icons/Send"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

const EditComments = ({ commentID, commentaire }) => {
  const [comment, setComment] = useState("")
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()

  const handleEdit = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(editComment(commentID, comment))
  }

  return (
    <>
      <Tooltip arrow title={<h4>Edit Comment</h4>}>
        <EditIcon
          style={{
            cursor: "pointer",
          }}
          onClick={handleEdit}
        ></EditIcon>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h5>
            <strong>Edit Comment</strong>
          </h5>
          <div className="add__comment">
            <Input
              className="comment__input"
              multiline
              maxRows="7"
              placeholder={commentaire}
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            ></Input>
            <SendIcon
              style={{
                cursor: "pointer",
              }}
              onClick={handleSubmit}
            ></SendIcon>
          </div>
        </Box>
      </Modal>
    </>
  )
}

export default EditComments
