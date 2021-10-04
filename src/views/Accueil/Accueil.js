import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import "./Accueil.css"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  Link,
} from "react-router-dom"

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
import Wallet from "..//Wallet/Wallet"
import { getUserDetails } from "../../actions/usersActions"
import Entreprises from "..//Entreprises/Entreprises"
import Consultants from "../Consultants/Consultants"
import Investor from "../Investor/Investor"
import ChatScreen from "../Chat/ChatScreen"
import ConversationList from "../ConversationList/ConversationList"
import BlankComponent from "../BlankComponent"

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
  const [open, setOpen] = useState(false)
  const [blankOpen, setBlankOpen] = useState(true)

  const [conversationID, setConversationID] = useState(null)

  let { path } = useRouteMatch()

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getUserDetails())
  // }, [dispatch])

  // const handleClick = () => {
  //   setOpen(!open)
  // }

  return (
    <Router>
      <AppNavBar history={history}></AppNavBar>

      <div className="dis-flex">
        <DrawerSide setOpen={setOpen} setBlankOpen={setBlankOpen}></DrawerSide>
        <Grid
          container
          style={{
            // backgroundColor: "rgba(0, 0, 0, 0.2)",
            backgroundColor: "rgba(20,20,20)", // black background
            // backgroundImage:
            //   "url(../../neven-krcmarek-9dTg44Qhx1Q-unsplash-removebg.png)",
          }}
        >
          <Grid
            item
            xs={8}
            sm={9}
            style={{ maxWidth: "72.2%", flexBasis: "70%" }}
          >
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
                {/* <Link to={"/Profil"}>
                  <button type="button">Click Me!</button>
                </Link> */}
                {blankOpen ? <BlankComponent></BlankComponent> : null}
                <Switch>
                  <Route exact path="/Journal" component={Journal}></Route>
                  <Route path="/Profil">
                    <Profil></Profil>
                  </Route>
                  <Route path="/Wallet">
                    <Wallet></Wallet>
                  </Route>
                  <Route path="/Entreprises">
                    <Entreprises></Entreprises>
                  </Route>
                  <Route path="/Consultants">
                    <Consultants></Consultants>
                  </Route>
                  <Route path="/Investor">
                    <Investor></Investor>
                  </Route>
                  <Route path="/Chat">
                    {conversationID ? (
                      <ChatScreen
                        setOpen={setOpen}
                        conversationID={conversationID}
                      ></ChatScreen>
                    ) : (
                      <Paper
                        style={{
                          width: "auto",
                          margin: "2rem",
                        }}
                      >
                        <span style={{ width: "2rem" }}>
                          Open a conversation to start a chat.
                        </span>
                      </Paper>
                    )}
                    {/* <ChatScreen
                      setOpen={setOpen}
                      conversationID={conversationID}
                    ></ChatScreen> */}
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
              width: "25vw",
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
              {!open ? (
                <RightSideBar></RightSideBar>
              ) : (
                <ConversationList
                  setConversationID={setConversationID}
                ></ConversationList>
              )}
            </Paper>
          </Grid>
        </Grid>
      </div>

      <Footer></Footer>
    </Router>
  )
}

export default Accueil
