import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import moment from "moment"
import "./ChatMessage.css"
import { Avatar } from "@material-ui/core"

const ChatMessage = ({ own, message, part1, profilePic, contactPic }) => {
  const [test, settest] = useState("")

  useEffect(() => {
    if (message["sendBy"] === part1) {
      // part1 c'est l'utilisateur connecté
      // si c'est lui test = sender automatiquement
      // sinon receiver
      settest("SENDER")
    } else {
      settest("RECEIVER")
    }
  }, [test, message])

  return (
    <div
      // className={message["sendBy"] !== "RECEIVER" ? "message own" : "message"}
      className={test !== "SENDER" ? "message own" : "message"}
    >
      <div className="messageTop">
        <Avatar
          className="avatar"
          src={test === "SENDER" ? profilePic : contactPic}
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            borderRadius: "50%",
            marginRight: "10px",
          }}
        ></Avatar>

        <p className="messageText">{message["content"]}</p>
      </div>
      <div className="messageBottom">
        {moment(message["updated_at"]).format("YYYY-MM-DD LT")}
      </div>
    </div>
  )
}

export default ChatMessage
