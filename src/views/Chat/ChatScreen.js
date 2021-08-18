import { Grid, Paper } from "@material-ui/core"
import React, { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ChatMessage from "../../components/ChatMessages/ChatMessage"
import SendIcon from "@material-ui/icons/Send"
import Loader from "../../components/utile/Loader"
import { getConversations } from "../../actions/ChatActions.js/conversationActions"
import "./ChatScreen.css"
import { updateSeenConversation } from "../../actions/ChatActions.js/seenConversationAction"
// import { initialSocket } from "./ChatServices"

const ChatScreen = ({ setOpen, conversationID }) => {
  // open conversations list bartrue
  setOpen(true)

  const [conversation, setconversation] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [messages, setMessages] = useState([])
  // useEffect(() => {
  //   const mySocket = initialSocket("ramzi")
  // }, [])

  const dispatch = useDispatch()

  const conversationsList = useSelector((state) => state.conversationsList)
  const { loading, error, conversations } = conversationsList

  useEffect(() => {
    if (!conversations.conversation) {
      dispatch(getConversations())
    } else {
      conversations.conversation.map((item) => {
        if (item["_id"] === conversationID) {
          console.log("conversation id " + conversationID)
          console.log("itemid if " + item["_id"])
          setconversation(item)
          // send item.message to chatMessage or mybe see a solution to determine sender & reciever
          // recheck the scenario of isAccepted
        }
      })
    }
  }, [dispatch, conversations.conversation, conversationID, setconversation])

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch(updateSeenConversation(conversationID))

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
                {conversation["messages"].length === 0 ? (
                  <>
                    {loading && <Loader />}
                    <h2>lol</h2>
                  </>
                ) : (
                  <>
                    {Array.from(conversation["messages"]).map((item, index) => (
                      <ChatMessage item={item}></ChatMessage>
                    ))}
                  </>
                )}

                {/* <ChatMessage own={true}></ChatMessage> */}
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
