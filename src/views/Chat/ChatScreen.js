import { Grid, Paper } from "@material-ui/core"
import React, { useState } from "react"
import { useEffect } from "react"
import ChatMessage from "../../components/ChatMessages/ChatMessage"
import SendIcon from "@material-ui/icons/Send"
import "./ChatScreen.css"
// import { initialSocket } from "./ChatServices"

const ChatScreen = () => {
  const [currentChat, setCurrentChat] = useState(null)
  const [messages, setMessages] = useState([])
  // useEffect(() => {
  //   const mySocket = initialSocket("ramzi")
  // }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // const message = {
    //   sender: user._id,
    //   text: newMessage,
    //   conversationId: currentChat._id,
  }

  return (
    <div className="ChatScreen">
      <Grid>
        <Paper
          style={{
            // backgroundColor: "#80808024",
            borderRadius: "30px",
            width: "90%",
            margin: "auto",
          }}
        >
          <div className="chatBox">
            <div className="chatBoxWrapper">
              <div className="chatBoxTop">
                <ChatMessage></ChatMessage>
                <ChatMessage own={true}></ChatMessage>
              </div>
              <div className="chatBoxBottom">
                <textarea
                  className="chatMessageInput"
                  placeholder="write something..."
                  // onChange={(e) => setNewMessage(e.target.value)}
                  // value={newMessage}
                ></textarea>
                <SendIcon
                  style={{
                    width: "9%",
                    height: "34px",
                    cursor: "pointer",
                  }}
                  onClick={handleSubmit}
                ></SendIcon>
              </div>

              {/* {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.sender === user._id} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )} */}
            </div>
          </div>
        </Paper>
      </Grid>
    </div>
  )
}

export default ChatScreen
