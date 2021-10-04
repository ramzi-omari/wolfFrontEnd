import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import { Link } from "react-router-dom"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import GroupAddIcon from "@material-ui/icons/GroupAdd"
import {
  AccountBalance,
  AccountBox,
  Business,
  Home,
  Work,
} from "@material-ui/icons"

const drawerWidth = "16vw"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    top: "10vh",
    // "& div": {
    //   minHeight: "0px",
    // },
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const DrawerSide = ({ setOpen, setBlankOpen }) => {
  const classes = useStyles()

  const [clicked, setClicked] = useState("")

  const handleNavButtons = (e) => {
    console.log("clicked: " + e)
  }
  const handleclicked = (text) => {
    console.log("handlclicked: " + text)

    return `/${text}`
  }

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {/* <Toolbar /> */}
        <div className={classes.drawerContainer}>
          <Divider />

          <List>
            {/* {["Profil", "Wallet", "Entreprises", "Consultants"].map(
              (text, index) => ( */}
            <ListItem
              button
              component={Link}
              to={"Journal"}
              // to={() => {
              //   handleclicked(text)
              // }}
              // onClick={() => handleNavButtons(text)}
              onClick={() => {
                setOpen(false)
                setBlankOpen(false)
              }}
              key={"Journal"}
            >
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary={"Journal"} />
            </ListItem>
            <Divider />
            <ListItem
              button
              component={Link}
              to={"Profil"}
              // to={() => {
              //   handleclicked(text)
              // }}
              // onClick={() => handleNavButtons(text)}
              onClick={() => {
                setOpen(false)
                setBlankOpen(false)
              }}
              key={"Profil"}
            >
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary={"Profil"} />
            </ListItem>

            <ListItem
              button
              component={Link}
              to={"Wallet"}
              // to={() => {
              //   handleclicked(text)
              // }}
              // onClick={() => handleNavButtons(text)}
              onClick={() => {
                setOpen(false)
                setBlankOpen(false)
              }}
              key={"Wallet"}
            >
              <ListItemIcon>
                <AccountBalance />
              </ListItemIcon>
              <ListItemText primary={"Wallet"} />
            </ListItem>

            <ListItem
              button
              component={Link}
              to={"Entreprises"}
              // to={() => {
              //   handleclicked(text)
              // }}
              // onClick={() => handleNavButtons(text)}
              onClick={() => {
                setOpen(false)
                setBlankOpen(false)
              }}
              key={"Entreprises"}
            >
              <ListItemIcon>
                <Business />
              </ListItemIcon>
              <ListItemText primary={"Entreprises"} />
            </ListItem>

            <ListItem
              button
              component={Link}
              to={"Consultants"}
              // to={() => {
              //   handleclicked(text)
              // }}
              // onClick={() => handleNavButtons(text)}
              onClick={() => {
                setOpen(false)
                setBlankOpen(false)
              }}
              key={"Consultants"}
            >
              <ListItemIcon>
                <Work />
              </ListItemIcon>
              <ListItemText primary={"Consultants"} />
            </ListItem>

            <ListItem
              button
              component={Link}
              to={"Investor"}
              // to={() => {
              //   handleclicked(text)
              // }}
              // onClick={() => handleNavButtons(text)}
              onClick={() => {
                setOpen(false)
                setBlankOpen(false)
              }}
              key={"Investor"}
            >
              <ListItemIcon>
                <GroupAddIcon />
              </ListItemIcon>
              <ListItemText primary={"Investisseurs"} />
            </ListItem>

            <ListItem
              button
              component={Link}
              to={"Chat"}
              // to={() => {
              //   handleclicked(text)
              // }}
              // onClick={() => handleNavButtons(text)}
              // onClick={handleClick}
              onClick={() => {
                setOpen(true)
                setBlankOpen(false)
              }}
              key={"Messagerie"}
            >
              <ListItemIcon>
                <GroupAddIcon />
              </ListItemIcon>
              <ListItemText primary={"Messagerie"} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  )
}

export default DrawerSide
