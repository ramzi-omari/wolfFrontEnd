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

const DrawerSide = () => {
  const classes = useStyles()

  const [clicked, setClicked] = useState("")

  const handleNavButtons = (e) => {
    console.log("clicked: " + e)
    // <Link to={"/Profil"}>
    //               <button type="button">Click Me!</button>
    // </Link>
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
          <List>
            {["Accueil", "Profil", "Wallet", "Profil"].map((text, index) => (
              <ListItem
                button
                component={Link}
                to={text}
                // to={() => {
                //   handleclicked(text)
                // }}
                // onClick={() => handleNavButtons(text)}
                key={text}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  )
}

export default DrawerSide
