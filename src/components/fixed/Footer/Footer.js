import { Grid } from "@material-ui/core"
import React from "react"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <Grid
        style={{
          height: "4vh",
          position: "fixed",
          bottom: 0,
          backgroundColor: "#202020",
          fontWeight: "600",
          color: "white",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        COPYRIGHT
      </Grid>{" "}
    </div>
  )
}

export default Footer
