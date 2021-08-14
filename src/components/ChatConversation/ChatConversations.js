import React from "react"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import CheckIcon from "@material-ui/icons/Check"
import "./ChatConversations.css"

const ChatConversations = ({ accepted }) => {
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-man-avatar-social-responsibility-vector-png-image_4822946.jpg"
        // src={
        //   user?.profilePicture
        //     ? PF + user.profilePicture
        //     : PF + "person/noAvatar.png"
        // }
        alt=""
      />
      <span className="conversationName">
        {/* {user?.username} */}
        Ramzi Ramzi
      </span>
      {accepted ? (
        <CheckIcon style={{ color: "green", marginLeft: "3vw" }} />
      ) : (
        <AccessTimeIcon style={{ marginLeft: "3vw" }} />
      )}
    </div>
  )
}

export default ChatConversations
