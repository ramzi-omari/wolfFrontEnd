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
import Journal from "../../components/Journal/Journal"
import Profil from "../../components/Profil/Profil"
import Wallet from "../../components/Wallet/Wallet"

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

  let { path } = useRouteMatch()

  return (
    <Router>
      <AppNavBar history={history}></AppNavBar>

      <div className="dis-flex">
        <DrawerSide></DrawerSide>
        <Grid
          container
          style={{
            backgroundColor: "rgba(20,20,20)",
            // backgroundImage:
            //   "url(../../neven-krcmarek-9dTg44Qhx1Q-unsplash-removebg.png)",
          }}
        >
          <Grid item xs={8} sm={9} style={{ maxWidth: "70%" }}>
            <Paper
              className={classes.paper}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                // backgroundImage: url(
                //   "../../neven-krcmarek-9dTg44Qhx1Q-unsplash-removebg.png"
                // ),
                minHeight: "85.6vh",
                marginBottom: "4vh",
              }}
            >
              <div className="accueil-center">
                <HeaderImg></HeaderImg>
                <Link to={"/Profil"}>
                  <button type="button">Click Me!</button>
                </Link>
                <Link to={"/Wallet"}>
                  <button type="button">home!</button>
                </Link>

                <Switch>
                  <Route exact path="/" component={Journal}></Route>
                  <Route path="/Profil">
                    <Profil></Profil>
                  </Route>
                  <Route path="/Wallet">
                    <Wallet></Wallet>
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
              height: "86vh",
              overflow: "hidden",
              position: "fixed",
              right: 0,
              maxWidth: "24%",
            }}
          >
            <Paper
              className={classes.paper}
              style={{
                backgroundColor: "#a2a2a226",
                paddingTop: "10px",
                paddinBottom: "10px",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
