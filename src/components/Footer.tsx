import React, { useRef, useEffect } from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { useIntersection } from "react-use"
import { gsap } from "gsap"

//Images
import Instagram from "../img/instagram.svg"
import LinkedIn from "../img/linkedIn.svg"
import Twitter from "../img/twitter.svg"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: "2.5rem",
      paddingBottom: "2rem",
      overflow: "hidden",
      background: "#16181E",
      position: "relative",
    },
    iconContainer: {
      display: "flex",
      justifyContent: "center",
    },
    icons: {
      paddingLeft: "3rem",
      paddingRight: "3rem",
      textDecoration: "none",
      border: 0,
      boxShadow: "none",
      "&:visited": {
        border: 0,
      },
      "&:hover": {
        border: 0,
      },
      "&:link": {
        border: 0,
      },
      "&:active": {
        border: 0,
      },
      [theme.breakpoints.down(520)]: {
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      },
      [theme.breakpoints.down(350)]: {
        paddingLeft: "1rem",
        paddingRight: "1rem",
      },
      [theme.breakpoints.down(300)]: {
        paddingLeft: "0.7rem",
        paddingRight: "0.7rem",
      },
    },
    copyright: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bolder",
      background:  "linear-gradient(90deg, rgba(255, 155, 33, 1) 0%, rgba(232,118,19,1) 100%)",
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      textAlign: "center",
      paddingRight: "1.2rem",
      paddingLeft: "1.2rem",
    },
    iconInner: {
      width: "5rem",
      [theme.breakpoints.down(500)]: {
        width: '4rem',
      },
      [theme.breakpoints.down(300)]: {
        width: '3.5rem',
      },
    },
  })
)
export default function PanelEight() {
  const classes = useStyles()

  // Ref for intersection observer
  const sectionRef7 = useRef(null)

  const intersection = useIntersection(sectionRef7, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  })

  useEffect(() => {
    // Fade in animation when scroll in
    const fadeIn = (element: any) => {
      gsap.to(element, 1, {
        opacity: 1,
        y: -0,
        ease: "power3.out",
        stagger: {
          amount: 0,
        },
      })
    }

    // Fade out animation when scroll out
    const fadeOut = (element: any) => {
      gsap.to(element, 1, {
        opacity: 0,
        y: -50,
        ease: "power3.out",
      })
    }
    intersection && intersection.intersectionRatio < 0.3
      ? // Not Reached
        fadeOut(".fadeIn7")
      : fadeIn(".fadeIn7")
  }, [intersection])

  return (
    // Defining Ref for intersection observer
    <div ref={sectionRef7} className={classes.root}>
      <div className={classes.iconContainer}>
        {/*Social Media Icons*/}
        <div className="fadeIn7">
          <a
            href="https://www.linkedin.com/in/rajahmaggay"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.icons}
          >
            <img src={LinkedIn} alt="LinkedIn" className={classes.iconInner} />
          </a>
        </div>
        <div className="fadeIn7">
          <a
            href="https://twitter.com/rajahmaggay"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.icons}
          >
            <img src={Twitter} alt="Twitter" className={classes.iconInner} />
          </a>
        </div>
        <div className="fadeIn7">
          <a
            href="https://www.instagram.com/rajahmaggay"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.icons}
          >
            <img
              src={Instagram}
              alt="Instagram"
              className={classes.iconInner}
            />
          </a>
        </div>
      </div>
      <div className="fadeIn7">
        <div className={classes.copyright}>
          {/*Copy right Notice*/}
          <span>
            Copyright {new Date().getFullYear()} Rajah Maggay. All rights
            reserved.
          </span>
        </div>
      </div>
    </div>
  )
}
