import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import RajahMaggayColoured from "../../img/RajahMaggayColoured.png"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row-reverse",
      alignItems: "space-around",
      backgroundColor: "#242734",
      paddingTop: "4rem",
      overflow: "auto",
      position: "relative",
      paddingBottom: "2.5rem",
      [theme.breakpoints.down(981)]: {
        backgroundColor: "#333645",
      },
      [theme.breakpoints.down(550)]: {
        display: "block",
        paddingTop: "2rem",
      },
    },
    text: {
      marginLeft: "3rem",
      color: "white",
      [theme.breakpoints.down(1059)]: {
        textAlign: "center",
        marginRight: "3rem",
      },
    },
    title: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bolder",
      fontSize: "4rem",
      [theme.breakpoints.down(420)]: {
        fontSize: "3.2rem",
      },
      [theme.breakpoints.down(340)]: {
        fontSize: "2.8rem",
      },
    },
    para: {
      marginTop: "1rem",
      marginRight: "7rem",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "normal",
      fontSize: "1.5rem",
      [theme.breakpoints.down(1144)]: {
        fontSize: "1.2rem",
        marginRight: "0rem",
      },
    },
    bar: {
      background:
        "linear-gradient(90deg, rgba(101,168,237,1) 0%, rgba(122,141,255,1) 100%)",
      borderRadius: "0.3rem",
      height: "1rem",
      width: "8rem",
      [theme.breakpoints.down(1059)]: {
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    imgContainer: {
      marginLeft: "3rem",
      width: "230%",
      marginRight: "3rem",
      display: "flex",
      [theme.breakpoints.down(1500)]: {
        width: "300rem",
      },
      [theme.breakpoints.down(1249)]: {
        marginLeft: "1rem",
      },
      [theme.breakpoints.down(1059)]: {
        display: "none",
      },
    },
    img: {
      display: "block",
      marginTop: "auto",
      marginBottom: "auto",
      [theme.breakpoints.down(550)]: {
        margin: 0,
      },
    },
    Button: {
      background:
        "linear-gradient(90deg, rgba(101,168,237,1) 0%, rgba(122,141,255,1) 100%)",
      padding: "1rem",
      paddingRight: "2rem",
      paddingLeft: "2rem",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 800,
      textTransform: "none",
      color: "white",
      [theme.breakpoints.down(981)]: {
        fontSize: "1rem",
      },
    },
    buttonContainer: {
      backgroundColor: "#242734",
      [theme.breakpoints.down(981)]: {
        backgroundColor: "#333645",
      },
      paddingBottom: "3rem",
      textAlign: "center",
    },
  })
)

export default function PanelFour() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.imgContainer}>
          <img src={RajahMaggayColoured} className={classes.img} />
        </div>
        <div className={classes.text}>
          <div className={classes.title}>About Me</div>
          <div className={classes.bar} />
          <div className={classes.para}>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
              erat nunc. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Aenean et erat nunc. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Aenean et erat nunc. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Aenean et erat nunc. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Aenean et erat nunc.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
              erat nunc. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Aenean et erat nunc. Lorem ipsum dolor sit amet, consectetur
            </div>
          </div>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <Button className={classes.Button}>Read More</Button>
      </div>
    </React.Fragment>
  )
}
