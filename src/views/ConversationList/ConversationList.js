import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Grid, Paper } from "@material-ui/core"
import ChatConversations from "../../components/ChatConversation/ChatConversations"
import { getConversations } from "../../actions/ChatActions.js/conversationActions"
import Loader from "../../components/utile/Loader"
import { updateSeenConversation } from "../../actions/ChatActions.js/seenConversationAction"
import { updateAccepteConversation } from "../../actions/ChatActions.js/acceptedConversationAction"

const ConversationList = ({ setConversationID }) => {
  const [conversation, setconversation] = useState([])

  const dispatch = useDispatch()

  const conversationsList = useSelector((state) => state.conversationsList)
  const { loading, error, conversations } = conversationsList

  useEffect(() => {
    if (!conversations.conversation) {
      dispatch(getConversations())
    } else {
      setconversation(conversations.conversation)
    }
  }, [dispatch, conversations.conversation])

  //  useEffect(() => {}, [conversation])

  const handleClick = (id) => {
    setConversationID(id)
    dispatch(updateSeenConversation(id))
    dispatch(updateAccepteConversation(id))
  }

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
                <div onClick={() => handleClick(item["_id"])}>
                  <ChatConversations item={item}></ChatConversations>
                </div>
              ))}
            </>
          )}
        </Paper>
      </Grid>
    </div>
  )
}

export default ConversationList
