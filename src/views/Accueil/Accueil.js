import React, { useEffect } from "react"
import "./Accueil.css"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  Link,
} from "react-router-dom"
import Tst from "../../components/tst"
import Tst2 from "../../components/tst2"
import AppNavBar from "../../components/fixed/AppNavBar/AppNavBar"
import DrawerSide from "../../components/fixed/DrawerSide"
import Footer from "../../components/fixed/Footer/Footer"
import HeaderImg from "../../components/HeaderImg/HeaderImg"
import RightSideBar from "../../components/RightSideBar/RightSideBar"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))
const Accueil = ({ history }) => {
  const classes = useStyles()

  let { path, url } = useRouteMatch()

  return (
    <Router>
      <AppNavBar history={history}></AppNavBar>

      <div className="dis-flex">
        <DrawerSide></DrawerSide>
        <Grid container>
          <Grid item xs={8} sm={9}>
            <Paper
              className={classes.paper}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.9)",
              }}
            >
              <div className="accueil-center">
                <HeaderImg></HeaderImg>
                <Link to={"/Tst2"}>
                  <button type="button">Click Me!</button>
                </Link>
                <Link to={"/Tst"}>
                  <button type="button">home!</button>
                </Link>

                <Switch>
                  <Route path="/Tst2">
                    <Tst2></Tst2>
                  </Route>
                  <Route path="/Tst">
                    <Tst></Tst>
                  </Route>
                </Switch>
              </div>
            </Paper>
          </Grid>
          <Grid
            item
            xs={4}
            sm={3}
            style={{
              height: "86.2vh",
              overflow: "hidden",
              position: "fixed",
              right: 0,
              backgroundColor: "red",
              width: "22%",
            }}
          >
            <Paper
              className={classes.paper}
              style={{
                backgroundColor: "green",
              }}
            >
              <RightSideBar></RightSideBar>
            </Paper>
          </Grid>
        </Grid>
      </div>

      <Footer></Footer>
    </Router>
  )
}

export default Accueil
