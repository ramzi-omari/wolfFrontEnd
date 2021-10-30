import { Grid, Paper } from "@material-ui/core"
import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"
import AppNavBar from "../components/fixed/AppNavBar/AppNavBar"
import DrawerSide from "../components/fixed/DrawerSide"
import Footer from "../components/fixed/Footer/Footer"
import RightSideBar from "../components/RightSideBar/RightSideBar"
import "./PrivateRoute.css"

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  path: path,
  lol,
  open,
  ...rest
}) => (
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
                <Paper>
                  <Component lol={lol} path={path} {...props} />
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
                <Paper>
                  <RightSideBar></RightSideBar>
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

const mapStatetoProps = (state) => ({
  // isAuthenticated: state.auth.isAuthenticated,
  // isAuthenticated: !!state.userLogin,
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStatetoProps)(PrivateRoute)
