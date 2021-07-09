import React from "react"
import Alert from "@material-ui/lab/Alert"

const Message = ({ severity, children }) => {
  return <Alert severity={severity}>{children}</Alert>
}

Message.defaultProps = {
  variant: "info",
}

export default Message
