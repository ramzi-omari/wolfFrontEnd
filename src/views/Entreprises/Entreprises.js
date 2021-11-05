import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Avatar, Grid, Paper, Typography } from "@material-ui/core"
import { getUsersDetail } from "../../actions/getUsersAction"

import "../Consultants/Consultants.css"
import Loader from "../../components/utile/Loader"
import ListMembers from "../../components/ListMembers/ListMembers"
import { useLocation } from "react-router"

const Entreprises = () => {
  const [data, setData] = useState("")
  const [selectedUser, setSelectedUser] = useState("")

  const dispatch = useDispatch()

  const getEntreprise = useSelector((state) => state.getEntreprise)
  const { loading, error, users } = getEntreprise

  useEffect(() => {
    if (users && !users.users) {
      dispatch(getUsersDetail("ENTREPRISE"))
    }
  }, [])

  useEffect(() => {}, [users])

  useEffect(() => {
    if (users && users.users) {
      setData(users.users)
    }
  }, [users])

  const location = useLocation()

  useEffect(() => {
    if (location.state) {
      setSelectedUser(location.state.userSelected)
    }
  }, [location])

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
                <h6>click to show details</h6>
                <ListMembers
                  selectedUser={selectedUser}
                  members={data}
                ></ListMembers>{" "}
              </>
            )}
          </Grid>
        </Paper>
      </Grid>
    </div>
  )
}

export default Entreprises
