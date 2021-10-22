import React, { useEffect, useState } from "react"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import CheckIcon from "@material-ui/icons/Check"
import "./ChatConversations.css"
import { useSelector } from "react-redux"
import { Avatar } from "@material-ui/core"

const ChatConversations = ({ item }) => {
  const [accepted, setAccepted] = useState(false)
  const [senderName, setSenderName] = useState("")
  const [senderFirstName, setSenderFirstName] = useState("")
  const [senderPic, setSenderPic] = useState("")

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (item) {
      setAccepted(item["accepted"])
      if (userInfo.user["_id"] !== item["sender"]["_id"]) {
        setSenderName(item["sender"]["last_name"])
        setSenderFirstName(item["sender"]["first_name"])
        setSenderPic(item["sender"]["profilePictureUrl"])
      } else {
        setSenderName(item["receiver"]["last_name"])
        setSenderFirstName(item["receiver"]["first_name"])
        setSenderPic(item["receiver"]["profilePictureUrl"])
      }
    }
  }, [item])

  return (
    <div className="conversation">
      <Avatar
        src={senderPic}
        style={{
          width: "35px",
          height: "35px",
          objectFit: "cover",
          marginRight: "20px",
          borderRadius: "50%",
        }}
      ></Avatar>
      <span className="conversationName">
        {/* {user?.username} */}
        {senderFirstName} {senderName}
      </span>
      {accepted ? <CheckIcon style={{ color: "green" }} /> : <AccessTimeIcon />}
    </div>
  )
}

export default ChatConversations
