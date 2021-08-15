import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Grid, Paper } from "@material-ui/core"
import ChatConversations from "../../components/ChatConversation/ChatConversations"
import { getConversations } from "../../actions/ChatActions.js/conversationActions"
import Loader from "../../components/utile/Loader"

const ConversationList = () => {
  const [conversation, setconversation] = useState([])

  const dispatch = useDispatch()

  const conversationsList = useSelector((state) => state.conversationsList)
  const { loading, error, conversations } = conversationsList

  // console.info("co " + conversation["0"]["_id"])

  useEffect(() => {
    if (!conversations.conversation) {
      dispatch(getConversations())
    } else {
      setconversation(conversations.conversation)
    }
  }, [dispatch])

  return (
    <div className="ConversationList">
      <Grid>
        <Paper
          style={{
            // backgroundColor: "#80808024",
            width: "22vw",
            margin: "auto",
            height: "83vh",
            overflowY: "auto",
            scrollbarColor: "#171717 white",
            scrollbarWidth: "thin",
          }}
        >
          {conversation.length === 0 ? (
            <>{loading && <Loader />}</>
          ) : (
            <>
              {Array.from(conversation).map((item, index) => (
                <ChatConversations item={item}></ChatConversations>
              ))}
            </>
          )}
        </Paper>
      </Grid>
    </div>
  )
}

export default ConversationList
