import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Avatar, Grid, Paper } from "@material-ui/core"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import NearMeIcon from "@material-ui/icons/NearMe"
import { ExpandMoreOutlined } from "@material-ui/icons"
import Loader from "../utile/Loader"
import Message from "../utile/Message"
import { getListPosts } from "../../actions/journalActions"
import moment from "moment"

import "./Journal.css"

const Journal = () => {
  const [publications, setPublications] = useState("")

  const dispatch = useDispatch()
  const postsList = useSelector((state) => state.postsList)
  const { loading, error, posts } = postsList

  // IMPORTANT !!!!!!!!!
  // force useeffect(postsList) to rerender when user is different (to avoid show posts not concerned)
  // maybe it'll work with combine reducer fixes

  // const userLogin = useSelector((state) => state.userLogin)
  // const { userInfo } = userLogin

  // const info = window.localStorage.getItem("userInfo")
  // const localinfo = JSON.stringify(info)

  useEffect(() => {
    if (!posts.publications) {
      console.log("no posts")
      dispatch(getListPosts())
    } else {
      setPublications(posts.publications)
    }
  }, [dispatch, posts.publications])

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
        {loading && <Loader />}

        {publications.length === 0 ? (
          <h2>Posts is empty</h2>
        ) : (
          <div>
            {publications.map((item) => (
              <div className="post">
                <div className="post__top">
                  <Avatar
                    src="https://img.favpng.com/18/18/18/computer-icons-icon-design-avatar-png-favpng-X29r5WhWMXVYvNsYXkR4iBgwf.jpg"
                    className="post__avatar"
                  />
                  <div className="post__topInfo">
                    <h3>username</h3>
                    <p>{moment(item.created_at).format("YYYY-MM-DD LT")}</p>
                  </div>
                </div>
                <div className="post__bottom">
                  <p>{item.content}</p>
                </div>
                <div className="post__image">
                  <img
                    src="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                    alt=""
                  />
                </div>
                <div className="post__options">
                  <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like {item.nbr_like}</p>
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
            ))}
          </div>
        )}
      </Paper>
    </Grid>
  )
}

export default Journal
