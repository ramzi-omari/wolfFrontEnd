import { Grid, Paper } from "@material-ui/core"
import React from "react"

const BlankComponent = () => {
  return (
    <div>
      <Grid>
        <Paper
          style={{
            // backgroundColor: "#80808024",
            borderRadius: "30px",
            width: "90%",
            margin: "auto",
          }}
        >
          <span className="noConversationText">
            Chose a page to visite on the left
          </span>
        </Paper>
      </Grid>
    </div>
  )
}

export default BlankComponent
