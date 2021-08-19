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
import { createConversation } from "../../actions/ChatActions.js/createConversationAction"
// import { initialSocket } from "./ChatServices"

const ChatScreen = ({ setOpen, conversationID }) => {
  const dispatch = useDispatch()

  // open conversations list barre (right side bar)
  setOpen(true)
  const [conversation, setconversation] = useState([])
  const [currentChat, setCurrentChat] = useState("")
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState([])
  const [own, setOwn] = useState("")

  // useEffect(() => {
  //   const mySocket = initialSocket("ramzi")
  // }, [])

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const conversationsList = useSelector((state) => state.conversationsList)
  const { loading, error, conversations } = conversationsList

  useEffect(() => {
    if (!conversations.conversation) {
      dispatch(getConversations())
    }
  }, [])

  useEffect(() => {
    if (conversations.conversation) {
      conversations.conversation.map((item) => {
        if (item["_id"] === conversationID) {
          setconversation(item)
          setMessages(item["messages"])
          setOwn(
            item["receiver"]["_id"] === userInfo.user["_id"]
              ? "RECEIVER"
              : "SENDER"
          )
          setCurrentChat(item["_id"])
        }
      })
    }
  }, [
    dispatch,
    conversationsList,
    setconversation,
    setMessages,
    conversationID,
  ])

  const handleSubmit = async (e) => {
    e.preventDefault()

    // const message = {
    //   sender: userInfo.user["_id"],
    //   text: newMessage,
    //   conversationId: currentChat,
    // }
  }

  // if (!conversation["messages"]) {
  //   return null
  // }
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
                {!messages.length === 0 ? (
                  <>
                    {loading && <Loader />}
                    <span className="noConversationText">
                      Open a conversation to start a chat.
                    </span>
                  </>
                ) : (
                  <>
                    {Array.from(messages).map((item, index) => (
                      <ChatMessage own={own} message={item}></ChatMessage>
                    ))}
                  </>
                )}
              </div>
              <div className="chatBoxBottom">
                <textarea
                  className="chatMessageInput"
                  placeholder="write something..."
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
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
            </div>
          </div>
        </Paper>
      </Grid>
    </div>
  )
}

export default ChatScreen
