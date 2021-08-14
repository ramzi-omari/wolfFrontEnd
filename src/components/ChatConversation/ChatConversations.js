import React from "react"
import "./ChatConversations.css"

const ChatConversations = () => {
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
    </div>
  )
}

export default ChatConversations
