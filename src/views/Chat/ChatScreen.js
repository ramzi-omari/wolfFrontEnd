import { Grid, Paper } from "@material-ui/core"
import React, { useRef, useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ChatMessage from "../../components/ChatMessages/ChatMessage"
import SendIcon from "@material-ui/icons/Send"
import Loader from "../../components/utile/Loader"
import { getConversations } from "../../actions/ChatActions.js/conversationActions"
import "./ChatScreen.css"
import { updateSeenConversation } from "../../actions/ChatActions.js/seenConversationAction"
import { createConversation } from "../../actions/ChatActions.js/createConversationAction"
import io from "socket.io-client"

const ChatScreen = ({ setOpen, conversationID }) => {
  const dispatch = useDispatch()

  // open conversations list barre (right side bar)
  setOpen(true)
  const [conversation, setconversation] = useState([])
  const [own, setOwn] = useState("")

  // receiver or sender id to choose show message color black/white
  const [part1, setpart1] = useState("")

  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState([])

  const socket = useRef()
  const scrollRef = useRef()

  //  SOCKET
  useEffect(() => {
    // socket.current = io(prprocessocess.env.REACT_CHAT_APP_API_KEY)

    socket.current = io("https://wolfap.herokuapp.com/")

    // socket.current.on("connection", conversationID)
    socket.current.emit("join", conversationID)
    // env chat
    // receive Done
    socket.current.on("chat", (data) => {
      setMessages((prev) => [
        {
          sendBy: data.sendBy,
          content: data.content,
          updated_at: Date.now(),
        },
        ...prev,
      ])
    })
  }, [])

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
          // setpart1(item["sender"]["_id"])
          // si mon ID est storé dans le SENDER > part1 = sender
          setpart1(
            item["sender"]["_id"] === userInfo.user["_id"]
              ? "SENDER"
              : "RECEIVER"
          )

          setOwn(
            item["receiver"]["_id"] === userInfo.user["_id"]
              ? "RECEIVER"
              : "SENDER"
          )
        }
      })
    }
  }, [dispatch, conversationsList, setMessages, conversationID])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const message = {
      // sendBy: userInfo.user["_id"],
      sendBy: own,
      content: newMessage,
    }
    socket.current.emit("chat", { message, conversationID })
    // setNewMessage("")
  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

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
                    {Array.from(messages)
                      .map((item, index) => (
                        <div ref={scrollRef}>
                          <ChatMessage
                            own={own}
                            message={item}
                            part1={part1}
                          ></ChatMessage>
                        </div>
                      ))
                      .reverse()}
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
