import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Avatar, Grid, Input, Paper } from "@material-ui/core"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import NearMeIcon from "@material-ui/icons/NearMe"
import { ExpandMoreOutlined } from "@material-ui/icons"
import SendIcon from "@material-ui/icons/Send"
import Loader from "../utile/Loader"
import Message from "../utile/Message"
import { getListPosts, likePost } from "../../actions/journalActions"
import moment from "moment"
import "./Journal.css"
import Comments from "./Comments/Comments"

const Journal = () => {
  const [publications, setPublications] = useState([])
  const [openComment, setOpenComment] = useState(true)
  const [clickedID, setClickedID] = useState("")

  const dispatch = useDispatch()

  const postsList = useSelector((state) => state.postsList)
  const { loading, error, posts } = postsList

  // POSTS UNDEFINED when accessing journal directly
  useEffect(() => {
    if (!posts.publications) {
      dispatch(getListPosts())
    }
  }, [])

  useEffect(() => {
    if (posts.publications) {
      setPublications(posts.publications)
    }
  }, [dispatch, postsList])

  const handleClick = (e) => {
    e.preventDefault()
    const id = e.currentTarget.getAttribute("data-id")

    setClickedID(id)
    setOpenComment(!openComment)
  }

  const handleClickLike = (e) => {
    e.preventDefault()
    const Likeid = e.currentTarget.getAttribute("like-id")
    console.log("idliked " + Likeid)

    dispatch(likePost(Likeid))
  }

  // to avoid publications undefined
  if (!posts) return null

  //if (!publications) return null

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
            {publications &&
              publications.map((item) => (
                <div className="post">
                  <div className="post__top">
                    <Avatar
                      src={item.publisher && item.publisher.profilePictureUrl}
                      className="post__avatar"
                    />
                    <div className="post__topInfo">
                      <h3>
                        {item.publisher &&
                          item.publisher.last_name +
                            " " +
                            item.publisher.first_name}
                      </h3>
                      <p>{moment(item.created_at).format("YYYY-MM-DD LT")}</p>
                    </div>
                  </div>
                  <div className="post__bottom">
                    <p>{item.content}</p>
                  </div>
                  <div className="post__image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="post__options">
                    <div
                      className="post__option"
                      onClick={handleClickLike}
                      like-id={item._id}
                    >
                      <ThumbUpIcon />
                      <p>Like {item.nbr_like}</p>
                    </div>

                    <div
                      className="post__option"
                      onClick={handleClick}
                      data-id={item._id}
                    >
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
                  {openComment && clickedID === item._id ? (
                    <Comments post_id={item._id}></Comments>
                  ) : null}
                </div>
              ))}
          </div>
        )}
      </Paper>
    </Grid>
  )
}

export default Journal
