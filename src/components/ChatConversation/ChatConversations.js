import React, { useEffect, useState } from "react"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import CheckIcon from "@material-ui/icons/Check"
import "./ChatConversations.css"
import { useSelector } from "react-redux"

const ChatConversations = ({ item }) => {
  const [accepted, setAccepted] = useState(false)
  const [senderName, setSenderName] = useState("")
  const [senderFirstName, setSenderFirstName] = useState("")
  const [senderPic, setSenderPic] = useState(
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-man-avatar-social-responsibility-vector-png-image_4822946.jpg"
  )

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (item) {
      setAccepted(item["accepted"])
      if (userInfo.user["_id"] !== item["sender"]["_id"]) {
        setSenderName(item["sender"]["last_name"])
        setSenderFirstName(item["sender"]["first_name"])
      } else {
        setSenderName(item["receiver"]["last_name"])
        setSenderFirstName(item["receiver"]["first_name"])
      }
    }
  }, [item])

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={senderPic}
        // if no picture we set
        // src={
        //   senderPic != ""?
        //     ? senderPic
        //     : "STANDAR PIC"
        // }
        alt=""
      />
      <span className="conversationName">
        {/* {user?.username} */}
        {senderFirstName} {senderName}
      </span>
      {accepted ? <CheckIcon style={{ color: "green" }} /> : <AccessTimeIcon />}
    </div>
  )
}

export default ChatConversations
