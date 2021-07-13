import { Avatar, Grid, Paper } from "@material-ui/core"
import React from "react"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import NearMeIcon from "@material-ui/icons/NearMe"
import { ExpandMoreOutlined } from "@material-ui/icons"
import "./Profil.css"

const Profil = () => {
  return (
    <Grid>
      <Paper style={{ backgroundColor: "#80808024", borderRadius: "30px" }}>
        <div className="post">
          <div className="post__top">
            <Avatar
              src="../../img/dino-reichmuth-d6yDSisNi4w-unsplash.jpg"
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
            <p>message</p>
          </div>
          <div className="post__image">
            <img src="../../img/marek-szturc-8Ou3EZmTMWA-unsplash.jpg" alt="" />
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

            <div className="post__option">
              <NearMeIcon />
              <p>Share</p>
            </div>

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

export default Profil
