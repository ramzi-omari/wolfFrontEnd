import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import "./ChatMessage.css"

const ChatMessage = ({ item }) => {
  const [own, setOwn] = useState(true)

  console.info("itemm " + item["content"])
  console.log("itemm 2")

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  // check sender reciever id with userInfo to show Own

  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p className="messageText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum
          dolor sit amet.
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
