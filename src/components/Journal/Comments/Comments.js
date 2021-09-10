import { Avatar } from "@material-ui/core"
import React from "react"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import Tooltip from "@material-ui/core/Tooltip"
import "./Comments.css"

const Comments = () => {
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
