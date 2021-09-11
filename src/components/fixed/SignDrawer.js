import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import ImageIcon from "@material-ui/icons/Image"
import ContactMail from "@material-ui/icons/ContactMail"
import Twitter from "@material-ui/icons/Twitter"
import { Tooltip } from "@material-ui/core"
import { Facebook, LinkedIn } from "@material-ui/icons"

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
          <Tooltip title="Qui somme nous">
            <Avatar>
              <ImageIcon style={{ color: "black", cursor: "pointer" }} />
            </Avatar>
          </Tooltip>
        </ListItemAvatar>
      </ListItem>
      <ListItem className={classes.LIpadding}>
        <ListItemAvatar>
          <Tooltip title="Nos réseaux sociaux">
            <Avatar>
              <ContactMail style={{ color: "black", cursor: "pointer" }} />
            </Avatar>
          </Tooltip>
        </ListItemAvatar>
      </ListItem>
      <ListItem className={classes.LIpadding}>
        <ListItemAvatar>
          <Tooltip title="Contact">
            <Avatar>
              <Twitter style={{ color: "black", cursor: "pointer" }} />
            </Avatar>
          </Tooltip>
        </ListItemAvatar>
      </ListItem>
      <ListItem className={classes.LIpadding}>
        <ListItemAvatar>
          <Tooltip title="Contact">
            <Avatar>
              <LinkedIn style={{ color: "black", cursor: "pointer" }} />
            </Avatar>
          </Tooltip>
        </ListItemAvatar>
      </ListItem>
      <ListItem className={classes.LIpadding}>
        <ListItemAvatar>
          <Tooltip title="Contact">
            <Avatar>
              <Facebook style={{ color: "black", cursor: "pointer" }} />
            </Avatar>
          </Tooltip>
        </ListItemAvatar>
      </ListItem>
    </List>
  )
}
