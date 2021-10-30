import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"
import AppNavBar from "../components/fixed/AppNavBar/AppNavBar"
import DrawerSide from "../components/fixed/DrawerSide"

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  path: path,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated ? (
        <div>
          <AppNavBar></AppNavBar>
          <DrawerSide></DrawerSide>
          <Component path={path} {...props} />
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
