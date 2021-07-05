import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css"
import SignUpIn from "./components/SignUpIn"
import Accueil from "./components/Accueil"

function App() {
  return (
    <Router>
      <div className="App">
        App
        <Route path="/" component={SignUpIn} exact></Route>
        <Route path="/accueil" component={Accueil}></Route>
        {/* DO NOT FORGET TO CHANGE <a href> to <Link to=""> to avoid refreshing the page  */}
      </div>
    </Router>
  )
}

export default App
