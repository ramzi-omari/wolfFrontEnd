import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"
import SignUpIn from "./views/Sign/SignUpIn"
import Accueil from "./views/Accueil/Accueil"

function App() {
  return (
    <Router>
      {/* DO NOT FORGET TO CHANGE <a href> to <Link to=""> to avoid refreshing the page  */}

      <Route path="/sign" component={SignUpIn}></Route>
      <Switch>
        <Route path="/" exact>
          <Accueil />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
