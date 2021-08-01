import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import ImageIcon from "@material-ui/icons/Image"
import ContactMail from "@material-ui/icons/ContactMail"
import BeachAccessIcon from "@material-ui/icons/BeachAccess"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50px",
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "#6b6b6b",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "1rem",
  },
  LIpadding: {
    paddingLeft: "6px",
    paddingRight: "6px",
  },
  primary: {
    color: "primary",
  },
}))

export default function SignDrawer() {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      <ListItem className={classes.LIpadding}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
      </ListItem>
      <ListItem className={classes.LIpadding}>
        <ListItemAvatar>
          <Avatar>
            <ContactMail color="primary" />
          </Avatar>
        </ListItemAvatar>
      </ListItem>
      <ListItem className={classes.LIpadding}>
        <ListItemAvatar>
          <Avatar className={classes.primary}>
            <BeachAccessIcon className={classes.primary} />
          </Avatar>
        </ListItemAvatar>
      </ListItem>
    </List>
  )
}
