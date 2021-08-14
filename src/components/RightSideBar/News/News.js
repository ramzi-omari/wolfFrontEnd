import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  makeStyles,
} from "@material-ui/core"
import React from "react"
import "./News.css"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
})

const News = () => {
  const classes = useStyles()
  const myArray = [
    {
      1: "https://img2.freepng.fr/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg",
      2: "news numero 1 test",
    },
    { 1: "second", 2: "TESTTESTTESTTES TTESTTESTTESTTE STTESTTEST " },
    { 1: "third", 2: "TEST " },
    { 1: "third", 2: "TEST " },

    // const listItems = numbers.map((number) =>    <li>{number}</li>  );
  ]
  return (
    <div>
      <Card
        classes={classes.root}
        style={{
          paddingBottom: "10px",
          paddingLeft: "5px",
          paddingRight: "5px",
          margin: "16px 0",
          height: "35vh",
          overflowY: "auto",
          scrollbarColor: "#171717 white",
          scrollbarWidth: "thin",
        }}
      >
        <CardHeader
          title="Nouveautés"
          subtitle="React Material-UI Card Example"
          style={{ padding: "5px" }}
        />
        {myArray.map((item) => {
          return (
            <CardContent
              style={{
                display: "flex",
                padding: "5px",
                alignItems: "center",
                backgroundColor: "rgba(128, 128, 128, 0.2)",
                margin: "5px",
                borderRadius: "10px",
              }}
            >
              <Avatar src={item[1]} />
              <h6
                style={{
                  fontWeight: 500,
                  marginLeft: "5px",
                  textAlign: "start",
                  fontSize: "12px",
                }}
              >
                {item[2]}
              </h6>
            </CardContent>
          )
        })}
      </Card>
    </div>
  )
}

export default News
