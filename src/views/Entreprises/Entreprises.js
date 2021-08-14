import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import MemberCard from "../../components/MemberCard/MemberCard"
import { Avatar, Grid, Paper, Typography } from "@material-ui/core"
import { getUsersDetail } from "../../actions/getUsersAction"

import "../Consultants/Consultants.css"
import Loader from "../../components/utile/Loader"

const Entreprises = () => {
  const [data, setData] = useState("")
  const [test, settest] = useState("")
  const dispatch = useDispatch()

  const getEntreprise = useSelector((state) => state.getEntreprise)
  const { loading, error, users } = getEntreprise
  console.info("laaah " + data.length)

  useEffect(() => {
    if (!users.users) {
      dispatch(getUsersDetail("ENTREPRISE"))
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
            Les Entreprises sur la plateforme
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
          <h2>LOOL</h2>
        </Paper>
      </Grid>
    </div>
  )
}

export default Entreprises