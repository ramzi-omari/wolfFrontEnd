import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css"
import SignUpIn from "./components/SignUpIn"
import Accueil from "./components/Accueil"
import tst from "./components/tst"
import tst2 from "./components/tst2"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Route path="/sign" component={SignUpIn} exact></Route>
      <Route path="/" component={Accueil}>
        <Header></Header>
        <Route path="/tst" component={tst}></Route>
        <Route path="/tst2" component={tst2}></Route>
        <Footer></Footer>
      </Route>
      {/* DO NOT FORGET TO CHANGE <a href> to <Link to=""> to avoid refreshing the page  */}
    </Router>
  )
}

export default App
