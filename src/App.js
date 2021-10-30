import React, { useEffect, useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import SignUpIn from "./views/Sign/SignUpIn"
import Accueil from "./views/Accueil/Accueil"

import { Link, Switch, Route, Redirect } from "react-router-dom"
import Accc from "./wwnew/Accc"
import { createBrowserHistory } from "history"
import PrivateRoute from "./Routers/PrivateRoute"
import PublicRoute from "./Routers/PublicRoute"
import Journal from "./components/Journal/Journal"
import Profil from "./components/Profil/Profil"
import Wallet from "./views/Wallet/Wallet"
import Entreprises from "./views/Entreprises/Entreprises"
import Consultants from "./views/Consultants/Consultants"

export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      <Switch>
        {/* change Accc with accueil without routers inside & with landing screen */}
        <PrivateRoute path="/Acc" component={Accc} exact={true} />
        <PublicRoute path="/" component={SignUpIn} exact={true} />
        <PrivateRoute path="/Journal" component={Journal} />
        <PrivateRoute path="/Profil" component={Profil} />
        <PrivateRoute path="/Wallet" component={Wallet} />
        <PrivateRoute path="/Entreprises" component={Entreprises} />
        <PrivateRoute path="/Consultants" component={Consultants} />
        {/* <PrivateRoute path="/Investor" component={Investor} />
        <PrivateRoute path="/Chat" component={ChatScreen} />
        <PrivateRoute path="/Bourse" component={Investor} /> 
       */}

        {/* <Route component={PageNotFound} /> */}
      </Switch>
    </Router>
  )
}

export default App
