import React from "react"
import "./ChatMessage.css"

const ChatMessage = ({ own }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p className="messageText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          {/* {message.text} */}
        </p>
      </div>
      <div className="messageBottom">
        {/* {format(message.createdAt)} */}1 hour ago
      </div>
    </div>
  )
}

export default ChatMessage
