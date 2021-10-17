import { Box, Modal, Typography } from "@material-ui/core"
import React from "react"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  maxWidth: 600,
  maxHeight: 600,
  overflowY: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

const MemberInfos = ({ handleCloseModal, openModal, item }) => {
  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Information Supplémentaire
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div>
            <h5>
              <strong>Full Name:</strong> {item.first_name} {item.last_name}
            </h5>
            <h5>
              <strong>Type: </strong>
              {item.type}
            </h5>
            <h5>
              <strong>Tags: </strong>
              {item.tag}
            </h5>
            <h5>
              <strong>Rating: </strong>
              {item.rating}
            </h5>
            <h5>
              <strong>Description: </strong>
              {item.description}
            </h5>
          </div>
        </Typography>
      </Box>
    </Modal>
  )
}

export default MemberInfos
