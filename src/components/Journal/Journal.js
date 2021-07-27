import { Avatar, Grid, Paper } from "@material-ui/core"
import React from "react"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import NearMeIcon from "@material-ui/icons/NearMe"
import { ExpandMoreOutlined } from "@material-ui/icons"
import "./Journal.css"

const Journal = () => {
  return (
    <Grid>
      <Paper
        style={{
          backgroundColor: "#80808024",
          borderRadius: "30px",
          width: "90%",
          margin: "auto",
        }}
      >
        <div className="post">
          <div className="post__top">
            <Avatar
              src="data:image/jpeg;base64,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"
              className="post__avatar"
            />
            <div className="post__topInfo">
              <h3>username</h3>
              <p>
                {/* {new Date(timestamp?.toDate()).toUTCString()} */}
                {/* {new Date(timestamp?.toDate()).toUTCString()} */}
                date
                {/* {timestamp} */}
              </p>
            </div>
          </div>
          <div className="post__bottom">
            <p>
              messagemessagemessage message message message messagemessage
              message messagemessage message messagemessage messagemessage
              message
            </p>
          </div>
          <div className="post__image">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div className="post__options">
            <div className="post__option">
              <ThumbUpIcon />
              <p>Like</p>
            </div>

            <div className="post__option">
              <ChatBubbleOutlineIcon />
              <p>Comment</p>
            </div>

            {/* <div className="post__option">
              <NearMeIcon />
              <p>Share</p>
            </div> */}

            <div className="post__option">
              <AccountCircleIcon />
              <ExpandMoreOutlined />
            </div>
          </div>
        </div>
      </Paper>
    </Grid>
  )
}

export default Journal
