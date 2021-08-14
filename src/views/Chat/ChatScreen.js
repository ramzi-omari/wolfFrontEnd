import { Grid, Paper } from "@material-ui/core"
import React, { useState } from "react"
import { useEffect } from "react"
import ChatMessage from "../../components/ChatMessages/ChatMessage"
import "./ChatScreen.css"
// import { initialSocket } from "./ChatServices"

const ChatScreen = () => {
  const [currentChat, setCurrentChat] = useState(null)
  // useEffect(() => {
  //   const mySocket = initialSocket("ramzi")
  // }, [])

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
                <ChatMessage></ChatMessage>
                <ChatMessage></ChatMessage>
                <ChatMessage></ChatMessage>
                <ChatMessage></ChatMessage>
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
