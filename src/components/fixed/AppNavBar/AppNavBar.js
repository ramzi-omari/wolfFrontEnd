import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { alpha, makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import InputBase from "@material-ui/core/InputBase"
import Badge from "@material-ui/core/Badge"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import AccountCircle from "@material-ui/icons/AccountCircle"
import MailIcon from "@material-ui/icons/Mail"
import NotificationsIcon from "@material-ui/icons/Notifications"
import MoreIcon from "@material-ui/icons/MoreVert"
import { logout } from "../../../actions/usersActions"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import "./AppNavBar.css"
import { getConversations } from "../../../actions/ChatActions.js/conversationActions"
import axios from "axios"
import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Modal,
} from "@material-ui/core"
import { Link, useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    zIndex: 100000,
    position: "sticky",
    top: 0,
    height: "10vh",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    zIndex: "99999999",
    backgroundColor: alpha(theme.palette.common.white, 1),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.45),
    },

    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
      left: "25%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    cursor: "pointer",
    zIndex: "999999990",
  },
  inputRoot: {
    color: "black",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}))

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

export default function AppNavBar() {
  const classes = useStyles()
  const [searchText, setSearchText] = useState("")
  const [users, setUsers] = useState([])
  const [open, setOpen] = useState("")

  const dispatch = useDispatch()
  const history = useHistory()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  // const conversationsList = useSelector((state) => state.conversationsList)
  // const { conversations } = conversationsList

  const dat = JSON.parse(localStorage.getItem("userInfo"))

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  // useEffect(() => {
  //   // if we are not logged in redirect to /sign
  //   if (!userInfo) {
  //     history.push("sign")
  //   }
  // }, [history, userInfo, logout])

  // useEffect(() => {
  //   if (!conversations.conversation) {
  //     dispatch(getConversations())
  //   }
  // }, [])

  const logingout = () => {
    console.log("userinfo before loginout: " + userInfo)
    setUsers([])
    dispatch(logout())
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = "primary-search-account-menu"
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )

  const mobileMenuId = "primary-search-account-menu-mobile"
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )
  useEffect(() => {}, [users])

  const HandleSearch = (e) => {
    e.preventDefault()
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    if (searchText && searchText.length > 0) {
      const getSearchedUsers = () => {
        axios
          .get(
            `${process.env.REACT_APP_API_KEY}/users/search?search=${searchText}`,
            config
          )
          .then((response) => {
            setUsers(response.data.users)
          })
          .catch((error) => console.log("err", error))
      }
      getSearchedUsers()
      console.log("uss", users)
      setOpen(true)
    }
  }

  // const HandleUserClick = (e) => {
  //   e.preventDefault()
  //   const user_id = e.currentTarget.getAttribute("data-id")
  //   console.log("iddd", user_id)
  //   setUsers([])
  // }

  const onSuggestHandler = (text) => {
    // setName(text.first_name + " " + text.last_name)
    // setDestinataireID(text._id)
    setSearchText(text.first_name + " " + text.last_name)
    // LINK TO MEMBERS depending on text.type
    console.log("typ", text.type)
    setOpen(false)
    setUsers([])
    history.push("/Consultants")
  }

  const handleClose = () => {
    setOpen(false)
    setUsers([])
  }

  return (
    <div className={classes.grow}>
      <AppBar style={{ backgroundColor: "#202020" }} position="static">
        <Toolbar style={{ minHeight: "unset" }}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon} onClick={HandleSearch}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div>{users.length === 0 ? "User not found" : null}</div>
              {users &&
                users.map((user, i) => (
                  <div
                    style={{
                      borderBottom: "1px solid  gray",
                      marginBottom: "0.5rem",
                    }}
                    key={i}
                    onClick={() => onSuggestHandler(user)}
                  >
                    <div style={{ color: "#707070", fontSize: "0.7rem" }}>
                      {user.email} (PHOTO)
                    </div>
                    <div>
                      {user.first_name} {user.last_name}
                    </div>
                  </div>
                ))}
            </Box>
          </Modal>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <IconButton onClick={logingout} color="inherit">
              <ExitToAppIcon />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  )
}
