import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import moment from "moment"
import "./ChatMessage.css"

const ChatMessage = ({ own, message }) => {
  return (
    <div className={own === "RECEIVER" ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p className="messageText">{message["content"]}</p>
      </div>
      <div className="messageBottom">
        {moment(message["updated_at"]).format("YYYY-MM-DD LT")}
      </div>
    </div>
  )
}

export default ChatMessage
