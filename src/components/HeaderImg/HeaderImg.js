import React, { useState } from "react"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import "./HeaderImg.css"

const HeaderImg = () => {
  const [open, setOpen] = useState(true)
  const [img, setImg] = useState(
    "https://shareconomy-prod.s3.amazonaws.com/uploads/blog/blog_image/9/landscape_900_x_300_px.jpg"
  )
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <>
      <div className="collapsebutton" onClick={handleClick}>
        {open ? <ExpandLess /> : <ExpandMore />}
      </div>
      {open ? (
        <div className="HeaderImg">
          <img src={img} alt="" />
        </div>
      ) : null}
    </>
  )
}

export default HeaderImg
