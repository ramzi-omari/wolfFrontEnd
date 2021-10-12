import { Avatar } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import Tooltip from "@material-ui/core/Tooltip"
import SendIcon from "@material-ui/icons/Send"
import { Grid, Input, Paper } from "@material-ui/core"
import "./Comments.css"
import { useDispatch, useSelector } from "react-redux"
import {
  getComments,
  addComment,
  deleteComment,
  editComment,
} from "../../../actions/commentsActions"
import Loader from "../../utile/Loader"
import moment from "moment"
import { setDate } from "date-fns/esm"

// faut gerer comment open !open Journal
// different get comments api call

const Comments = ({ post_id }) => {
  const [commentaires, setCommentaires] = useState([])
  const [newCommentaire, setNewCommentaire] = useState("")

  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.userLogin)

  const comments = useSelector((state) => state.comments)
  const { loading, error, comment } = comments

  useEffect(() => {
    dispatch(getComments(post_id))
  }, [post_id])

  useEffect(() => {
    if (!comment.comments) {
      dispatch(getComments(post_id))
    } else {
      setCommentaires(comment.comments)
    }
  }, [comment])

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch(addComment(post_id, newCommentaire))
    setNewCommentaire("")
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    const del_id = e.currentTarget.getAttribute("data-id")

    dispatch(deleteComment(del_id))
  }
  const handleEdit = async (e) => {
    e.preventDefault()
    const edit_id = e.currentTarget.getAttribute("data_edit-id")

    dispatch(editComment(edit_id, newCommentaire))
  }

  return (
    <div className="comment_global">
      {!loading ? (
        <>
          {commentaires?.map((commentaire) => (
            <>
              <div className="post__comments">
                <div className="post__top">
                  <Avatar
                    src="https://img.favpng.com/18/18/18/computer-icons-icon-design-avatar-png-favpng-X29r5WhWMXVYvNsYXkR4iBgwf.jpg"
                    className="post__avatar"
                  />
                  <div className="post__topInfo">
                    <h3>
                      {commentaire.user["first_name"]}{" "}
                      {commentaire.user["last_name"]}
                    </h3>
                    <p>
                      {moment(commentaire.updated_at).format("YYYY-MM-DD LT")}
                    </p>
                    {/* <p>15:20 lundi</p> */}
                  </div>
                </div>
                <div className="post__comment">
                  <h5>{commentaire["comment"]}</h5>
                  {commentaire.user["_id"] === userInfo?.user["_id"] ? (
                    <div>
                      <Tooltip arrow title={<h4>Delete Comment</h4>}>
                        <DeleteIcon
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={handleDelete}
                          data-id={commentaire["_id"]}
                        ></DeleteIcon>
                      </Tooltip>
                      <Tooltip arrow title={<h4>Edit Comment</h4>}>
                        <EditIcon
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={handleEdit}
                          data_edit-id={commentaire["_id"]}
                        ></EditIcon>
                      </Tooltip>
                    </div>
                  ) : null}
                </div>
              </div>
            </>
          ))}
        </>
      ) : (
        <Loader />
      )}

      <div className="add__comment">
        <Input
          className="comment__input"
          multiline
          maxRows="5"
          placeholder="Add a comment"
          onChange={(e) => setNewCommentaire(e.target.value)}
          value={newCommentaire}
        ></Input>
        <SendIcon
          style={{
            cursor: "pointer",
          }}
          onClick={handleSubmit}
        ></SendIcon>
      </div>
    </div>
  )
}

export default Comments
