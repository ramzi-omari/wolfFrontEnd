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
            width: "22vw",
            margin: "auto",
            height: "83vh",
            overflowY: "auto",
            scrollbarColor: "#171717 white",
            scrollbarWidth: "thin",
          }}
        >
          <ChatConversations></ChatConversations>
          <ChatConversations accepted={true}></ChatConversations>
          <ChatConversations></ChatConversations>
          <ChatConversations></ChatConversations>
          <ChatConversations></ChatConversations>
          <ChatConversations></ChatConversations>
          <ChatConversations></ChatConversations>
          <ChatConversations></ChatConversations>
          <ChatConversations></ChatConversations>
          <ChatConversations></ChatConversations>
          <ChatConversations></ChatConversations>
          <ChatConversations></ChatConversations>
          <ChatConversations></ChatConversations>
        </Paper>
      </Grid>
    </div>
  )
}

export default ConversationList
