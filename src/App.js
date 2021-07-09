import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"
import SignUpIn from "./components/SignUpIn"
import Accueil from "./components/Accueil"

function App() {
  return (
    <Router>
      {/* DO NOT FORGET TO CHANGE <a href> to <Link to=""> to avoid refreshing the page  */}

      <Route path="/" component={SignUpIn} exact></Route>
      <Switch>
        <Route path="/accueil">
          <Accueil />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
