import React, { useEffect, useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import SignUpIn from "./views/Sign/SignUpIn"
import { Link, Switch, Route, Redirect } from "react-router-dom"
import { createBrowserHistory } from "history"
import PrivateRoute from "./Routers/PrivateRoute"
import PublicRoute from "./Routers/PublicRoute"
import Journal from "./components/Journal/Journal"
import Profil from "./components/Profil/Profil"
import Wallet from "./views/Wallet/Wallet"
import Entreprises from "./views/Entreprises/Entreprises"
import Consultants from "./views/Consultants/Consultants"
import Investor from "./views/Investor/Investor"
import ChatScreen from "./views/Chat/ChatScreen"
import Home from "./views/Home/Home"

export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path="/Acc" open={false} component={Home} exact={true} />
        <PublicRoute path="/" component={SignUpIn} exact={true} />
        <PrivateRoute path="/Journal" open={false} component={Journal} />
        <PrivateRoute
          path="/Profil"
          open={false}
          lol={false}
          component={Profil}
        />
        <PrivateRoute
          path="/Wallet"
          open={false}
          lol={null}
          component={Wallet}
        />
        <PrivateRoute
          path="/Entreprises"
          open={false}
          component={Entreprises}
        />
        <PrivateRoute
          path="/Consultants"
          open={false}
          component={Consultants}
        />
        <PrivateRoute path="/Investor" open={false} component={Investor} />
        <PrivateRoute path="/Chat" open={true} component={ChatScreen} />
        <PrivateRoute path="/Bourse" open={false} component={Investor} />

        {/* <Route component={PageNotFound} /> */}
      </Switch>
    </Router>
  )
}

export default App
