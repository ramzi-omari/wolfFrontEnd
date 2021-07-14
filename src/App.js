import React from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"
import SignUpIn from "./views/Sign/SignUpIn"
import Accueil from "./views/Accueil/Accueil"

function App() {
  return (
    <Router>
      {/* DO NOT FORGET TO CHANGE <a href> to <Link to=""> to avoid refreshing the page  */}

      <Route exact path="/sign" component={SignUpIn}></Route>
      <Switch>
        <Route path="/" exact component={Accueil}></Route>
      </Switch>
    </Router>
  )
}

export default App
