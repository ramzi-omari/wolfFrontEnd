import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import ImageIcon from "@material-ui/icons/Image"
import WorkIcon from "@material-ui/icons/Work"
import BeachAccessIcon from "@material-ui/icons/BeachAccess"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50px",
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "darkslategray",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "1rem",
  },
  LIpadding: {
    paddingLeft: "6px",
    paddingRight: "6px",
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
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
      </ListItem>
      <ListItem className={classes.LIpadding}>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
      </ListItem>
    </List>
  )
}
