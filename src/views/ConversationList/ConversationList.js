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

  // Type Error with conversations.conversstst
  useEffect(() => {
    if (!conversations) {
      dispatch(getConversations())
    } else {
      if (conversations && !conversations.conversation) {
        dispatch(getConversations())
      } else {
        setconversation(conversations.conversation)
      }
    }
  }, [dispatch, conversations])
  // type error conversation.conversati
  // }, [dispatch, getConversations, setconversation])

  //  useEffect(() => {}, [conversation])

  const handleClick = (id, unseen, accepted) => {
    setConversationID(id)

    if (unseen) {
      dispatch(updateSeenConversation(id))
    }
    if (!accepted) {
      dispatch(updateAccepteConversation(id))
    }
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
                <div
                  onClick={() =>
                    handleClick(item["_id"], item["unseen"], item["accepted"])
                  }
                >
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
