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
import {
  initialSocket,
  subscribeToChat,
  disconnectSocket,
} from "../../ChatServices/ChatServices"

const ChatScreen = ({ setOpen, conversationID }) => {
  const dispatch = useDispatch()

  // open conversations list barre (right side bar)
  setOpen(true)
  const [conversation, setconversation] = useState([])
  const [own, setOwn] = useState("")

  // const [room, setRoom] = useState("")
  const [receiverId, setReceiverId] = useState(null)
  const [currentChat, setCurrentChat] = useState(null)

  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState([])
  const [arrivalMessage, setArrivalMessage] = useState(null)

  const socket = useRef()
  const scrollRef = useRef()

  //  SOCKET
  useEffect(() => {
    // connect ??
    socket.current = io("ws://localhost:8900")
    // receive ??
    socket.current.on("chat", (data) => {
      setArrivalMessage({
        sender: data.sendBy,
        text: data.content,
        createdAt: Date.now(),
      })
    })
  }, [])

  // ARRIVALMESSAGE SENDER = an ID ???

  useEffect(() => {
    arrivalMessage &&
      // currentChat?.members.includes(arrivalMessage.sender) &&
      receiverId === arrivalMessage.sender && // === "SENDER" need to check sender ID
      setMessages((prev) => [...prev, arrivalMessage])
  }, [arrivalMessage, receiverId])

  // useEffect(() => {
  //   socket.current.emit("addUser", userInfo.user["_id"])
  //   socket.current.on("getUsers", (users) => {
  //     setOnlineUsers(
  //       user.followings.filter((f) => users.some((u) => u.userId === f))
  //     )
  //   })
  // }, [userInfo.user])

  //

  //2

  // room = conversationID took from ConversationList component
  // 1
  // useEffect(() => {
  //   setRoom(conversationID)
  //   console.log("rom " + room)
  //   if (room) initialSocket(room)
  //   subscribeToChat((err, data) => {
  //     if (err) return
  //     setChat((oldChats) => [data, ...oldChats])
  //   })
  //   return () => {
  //     disconnectSocket()
  //   }
  // }, [room, conversationID]) //2

  // const [socket, setSocket] = useState(null);

  // useEffect(() => {
  //   const newSocket = io(`http://${window.location.hostname}:3000`);
  //   setSocket(newSocket);
  //   return () => newSocket.close();
  // }, [setSocket]);

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

          setReceiverId(
            item["receiver"]["_id"] !== userInfo.user["_id"]
              ? item["receiver"]["_id"]
              : item["sender"]["_id"]
          )
          setCurrentChat(item)
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

    const message = {
      sendBy: userInfo.user["_id"],
      content: newMessage,
      id_conv: conversationID,
    }
    socket.current.emit("chat", message)

    // socket.current.emit("chat", {
    //   senderId: userInfo.user["_id"],
    //   receiverId,
    //   text: newMessage,
    // })

    //

    // send new message to Messages object and clean up newMessage state
    // which API
    // try {
    //   const res = await axios.post("/messages", message);
    //   setMessages([...messages, res.data]);
    //   setNewMessage("");
    // } catch (err) {
    //   console.log(err);
    // }
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
                    {Array.from(messages).map((item, index) => (
                      <div ref={scrollRef}>
                        <ChatMessage own={own} message={item}></ChatMessage>
                      </div>
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
