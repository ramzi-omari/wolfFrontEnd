import { Avatar } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import Tooltip from "@material-ui/core/Tooltip"
import "./Comments.css"
import { useDispatch, useSelector } from "react-redux"
import { getComments } from "../../../actions/commentsActions"

// faut gerer comment open !open Journal
// different get comments api call

const Comments = () => {
  const [commentaire, setCommentaire] = useState("")

  const dispatch = useDispatch()

  const comments = useSelector((state) => state.comments)
  const { loading, error, comment } = comments

  const id = "60f304f75275dba8ce9c88c4"
  useEffect(() => {
    if (!comment.comment) {
      dispatch(getComments(id))
    }
  }, [])

  useEffect(() => {
    if (comment.comment) {
      setCommentaire(comment.comment)
      console.log("co " + commentaire)
    }
  }, [dispatch, comments])
  return (
    <div className="post__comments">
      <div className="post__top">
        <Avatar
          src="https://img.favpng.com/18/18/18/computer-icons-icon-design-avatar-png-favpng-X29r5WhWMXVYvNsYXkR4iBgwf.jpg"
          className="post__avatar"
        />
        <div className="post__topInfo">
          <h3>username</h3>
          {/* <p>{moment(item.created_at).format("YYYY-MM-DD LT")}</p> */}
          <p>15:20 lundi</p>
        </div>
      </div>
      <div className="post__comment">
        <h5>
          textgldsfsd fsfsdfsd sdfsdfsf sdfsdf dsfsd f sdf dsfsdfsdf dsfsdfsdfsf{" "}
        </h5>
        <div>
          <Tooltip arrow title={<h4>Delete Comment</h4>}>
            <DeleteIcon
              style={{
                cursor: "pointer",
              }}
            ></DeleteIcon>
          </Tooltip>
          <Tooltip arrow title={<h4>Edit Comment</h4>}>
            <EditIcon
              style={{
                cursor: "pointer",
              }}
            ></EditIcon>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default Comments
