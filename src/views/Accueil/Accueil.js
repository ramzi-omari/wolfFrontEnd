import React from "react"
import { useDispatch, useSelector } from "react-redux"
import "./Accueil.css"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom"

import Tst from "../../components/tst"
import Tst2 from "../../components/tst2"
import AppNavBar from "../../components/fixed/AppNavBar/AppNavBar"
import DrawerSide from "../../components/fixed/DrawerSide"
import Footer from "../../components/fixed/Footer/Footer"

const Accueil = () => {
  let { path } = useRouteMatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  return (
    <Router>
      <AppNavBar></AppNavBar>
      <div className="dis-flex">
        <DrawerSide></DrawerSide>
        <h4>main</h4>

        <Switch>
          <Route exact path={`${path}/Tst`}>
            <Tst></Tst>
          </Route>
          <Route exact path={`${path}/Tst2`}>
            <Tst2></Tst2>
          </Route>
        </Switch>
      </div>
      <Footer></Footer>
    </Router>
  )
}

export default Accueil
