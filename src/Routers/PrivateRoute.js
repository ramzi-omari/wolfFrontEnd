import { Grid, Paper } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"
import AppNavBar from "../components/fixed/AppNavBar/AppNavBar"
import DrawerSide from "../components/fixed/DrawerSide"
import Footer from "../components/fixed/Footer/Footer"
import HeaderImg from "../components/HeaderImg/HeaderImg"
import RightSideBar from "../components/RightSideBar/RightSideBar"
import ConversationList from "../views/ConversationList/ConversationList"
import "./PrivateRoute.css"

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  path: path,
  lol,
  open,
  ...rest
}) => {
  const [conversationID, setConversationID] = useState(null)

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <div>
            <AppNavBar></AppNavBar>
            <div className="dis-flex">
              {/* Left Drawer */}
              <DrawerSide></DrawerSide>
              {/* Center & Right Grid */}
              <Grid
                container
                style={{
                  backgroundColor: "rgba(20,20,20)",
                }}
              >
                {/* Center Grid   START */}
                <Grid
                  item
                  xs={8}
                  sm={9}
                  style={{ maxWidth: "72.2%", flexBasis: "70%" }}
                >
                  <Paper
                    style={{
                      padding: "16px",
                      backgroundColor: "rgba(0, 0, 0, 0.2)",
                      minHeight: "85.6vh",
                      marginBottom: "4vh",
                    }}
                  >
                    {/* <div className="accueil-center"> */}
                    <div className="accueil-center">
                      <HeaderImg />

                      <Component
                        conversationID={conversationID}
                        lol={lol}
                        path={path}
                        {...props}
                      />
                    </div>
                  </Paper>
                </Grid>
                {/* Center  Grid   DONE */}

                {/* Right SideBar & ConversationList */}
                <Grid
                  item
                  xs={4}
                  sm={3}
                  style={{
                    height: "86vh",
                    overflow: "hidden",
                    position: "fixed",
                    right: 0,
                    width: "25vw",
                  }}
                >
                  <Paper
                    style={{
                      padding: "16px",
                      backgroundColor: "#a2a2a226",
                      paddingTop: "10px",
                      paddinBottom: "10px",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {!open ? (
                      <RightSideBar></RightSideBar>
                    ) : (
                      <ConversationList
                        setConversationID={setConversationID}
                      ></ConversationList>
                    )}
                  </Paper>
                </Grid>
                {/* Right SideBar & ConversationList DONE*/}
              </Grid>
              {/* Center & Right Grid   DONE */}
            </div>
            <Footer></Footer>
          </div>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  )
}
const mapStatetoProps = (state) => ({
  // isAuthenticated: state.auth.isAuthenticated,
  // isAuthenticated: !!state.userLogin,
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStatetoProps)(PrivateRoute)
