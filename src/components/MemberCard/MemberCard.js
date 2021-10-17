import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { Avatar } from "@material-ui/core"
import ContactMailIcon from "@material-ui/icons/ContactMail"
import HelpIcon from "@material-ui/icons/Help"
import Tooltip from "@material-ui/core/Tooltip"
import "./MemberCard.css"
import MemberInfos from "./MemberInfos"

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    padding: "1rem",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  content: {
    padding: "1rem 1rem !important",
    backgroundColor: "#6b6b6b2b",
    height: "8.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    gap: "1.5rem",
    minWidth: "auto",
    borderRadius: "20px",
  },
  large: {
    width: "40px",
    height: "40px",
    margin: "auto",
    marginBottom: "0.2rem",
  },
})

const MemberCard = ({ item }) => {
  const classes = useStyles()
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {}, [item])
  const bull = <span className={classes.bullet}>•</span>
  // INFOS : nom prenom city type

  const handleOpenModal = () => {
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <div className="avatar">
            <Avatar
              alt="s"
              src="https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?size=338&ext=jpg"
              className={classes.large}
            />
            <Typography
              variant="h5"
              component="h6"
              style={{
                fontSize: "0.7rem",
                fontWeight: "501",
                textTransform: "capitalize",
              }}
            >
              {item.type}
            </Typography>
          </div>

          <div className="infos">
            <Typography
              variant="h5"
              component="h3"
              style={{ fontSize: "1.2rem", textTransform: "capitalize" }}
            >
              {item.last_name} {""}
              {item.first_name}
            </Typography>

            <Typography variant="body2" component="p">
              {item.city}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              style={{ color: "#0645AD ", marginTop: "1rem" }}
            >
              {item.tag}
              #informatique,gestion
            </Typography>
            <div className="contactMember">
              {/* <Tooltip title="Contactez directement" > */}
              <Tooltip arrow title={<h4>Contactez directement</h4>}>
                <ContactMailIcon
                  style={{ color: "#404040" }}
                  fontSize="large"
                ></ContactMailIcon>
              </Tooltip>
              <Tooltip arrow title={<h4>Infos supplémentaire</h4>}>
                <HelpIcon
                  style={{ color: "#404040", cursor: "pointer" }}
                  fontSize="large"
                  onClick={handleOpenModal}
                ></HelpIcon>
              </Tooltip>
            </div>
          </div>
        </CardContent>
        {openModal ? (
          <MemberInfos
            handleCloseModal={handleCloseModal}
            openModal={openModal}
            item={item}
          ></MemberInfos>
        ) : null}
        {/* <CardActions>
        <Button size="small">Contact</Button>
      </CardActions> */}
      </Card>
    </div>
  )
}

export default MemberCard
