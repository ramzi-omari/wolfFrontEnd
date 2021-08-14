import { Grid, Paper } from "@material-ui/core"
import React from "react"
import ChatConversations from "../../components/ChatConversation/ChatConversations"

const ConversationList = () => {
  return (
    <div className="ConversationList">
      <Grid>
        <Paper
          style={{
            // backgroundColor: "#80808024",
            borderRadius: "30px",
            width: "22vw",
            margin: "auto",
          }}
        >
          <ChatConversations></ChatConversations>
          <ChatConversations></ChatConversations>
          <ChatConversations></ChatConversations>
        </Paper>
      </Grid>
    </div>
  )
}

export default ConversationList
