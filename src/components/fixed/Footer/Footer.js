import { Grid } from "@material-ui/core"
import React from "react"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <Grid
        style={{
          height: "20px",
          position: "fixed",
          bottom: 0,
          backgroundColor: "blue",
          width: "100%",
        }}
      >
        COPYRIGHT
      </Grid>{" "}
    </div>
  )
}

export default Footer
