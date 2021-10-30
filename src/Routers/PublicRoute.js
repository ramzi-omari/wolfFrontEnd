import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"

// const isLogged = JSON.parse(localStorage.getItem("userInfo"))

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  path: path,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated ? (
        <Redirect to="/Acc" />
      ) : (
        <Component path={path} {...props} />
      )
    }
  />
)

const mapStatetoProps = (state) => ({
  //   isAuthenticated: !!state.userLogin,
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStatetoProps)(PublicRoute)
