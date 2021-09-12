import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import MemberCard from "../../components/MemberCard/MemberCard"
import { Avatar, Grid, Paper, Typography } from "@material-ui/core"
import { getUsersDetail } from "../../actions/getUsersAction"
import Loader from "../../components/utile/Loader"

import "./Consultants.css"

const Consultants = () => {
  const [data, setData] = useState("")
  const dispatch = useDispatch()

  const getConsultant = useSelector((state) => state.getConsultant)
  const { loading, error, users } = getConsultant

  useEffect(() => {
    if (users && !users.users) {
      dispatch(getUsersDetail("CONSULTANT"))
    }
  }, [])

  useEffect(() => {
    if (users.users) {
      setData(users.users)
    }
  }, [users.users])

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
            {loading && <Loader />}

            {data.length === 0 ? (
              <h2>Users is empty</h2>
            ) : (
              <>
                {Array.from(data).map((item, index) => (
                  <Grid item xs={12} sm={6} md={6} key={index}>
                    <MemberCard item={item}></MemberCard>
                  </Grid>
                ))}
              </>
            )}
          </Grid>
        </Paper>
      </Grid>
    </div>
  )
}

export default Consultants
