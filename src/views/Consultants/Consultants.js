import React from "react"
import MemberCard from "../../components/MemberCard/MemberCard"
import { Avatar, Grid, Paper, Typography } from "@material-ui/core"
import "./Consultants.css"

const Consultants = () => {
  return (
    <div className="consultants">
      <Grid>
        <Paper
          style={{
            // backgroundColor: "#80808024",
            borderRadius: "30px",
            width: "90%",
            margin: "auto",
          }}
        >
          <Typography
            variant="h5"
            component="h3"
            style={{ paddingTop: "1rem" }}
          >
            Les Consultants sur la plateforme
          </Typography>
          <Grid
            container
            justifyContent="center"
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <MemberCard></MemberCard>
              </Grid>
            ))}
          </Grid>
          <h2>LOOL</h2>
        </Paper>
      </Grid>
    </div>
  )
}

export default Consultants
