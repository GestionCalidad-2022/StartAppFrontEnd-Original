import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import LogoStart from "../images/logoStart.png"
import { Typography } from '@material-ui/core'
import {useMediaQuery} from '@material-ui/core'
import Chip from '@material-ui/core/Chip';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "500px",
    height: "200px",
    marginTop: "5px",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin:'30px',
    marginTop:'-80px',
  },
  smallLogo:{
    width: "100%",
  },
  backButton:{
      width:'100%',
      display:"flex",
      justifyContent:"flex-start",
      margin:'20px 0',
  }
}))

const LogoAndSlogan = () => {
    const classes = useStyles()
    const smallScreen = !useMediaQuery('(min-width:700px)')
    return (
        <div className={classes.logoContainer}>
            <div className={classes.backButton}>
              <Chip color="primary" icon={<ArrowBackIosIcon />} label="Volver" clickable onClick={() => window.history.back()}/>
            </div>
            <img src={LogoStart} alt="logo Start" className={(smallScreen)? classes.smallLogo: classes.logo} />
            <Typography variant="h2" style={{ textAlign: "center" }}>
            Incubadora de proyectos sociales y ambientales
            </Typography>
        </div>
    )
}

export default LogoAndSlogan