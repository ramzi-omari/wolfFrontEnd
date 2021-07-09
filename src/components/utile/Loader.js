import React from "react"
import CircularProgress from "@material-ui/core/CircularProgress"

const Loader = () => {
  return (
    // <Spinner
    //   animation="border"
    //   role="status"
    //   style={{
    //     width: "100px",
    //     height: "100px",
    //     margin: "auto",
    //     display: "block",
    //   }}
    // >
    //   <span className="sr-only">Loading...</span>
    // </Spinner>
    <CircularProgress color="secondary">
      <span>Loading...</span>
    </CircularProgress>
  )
}

export default Loader
