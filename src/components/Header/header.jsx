import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./header-style";
import twinklingStarsGif from "../../images/star1.gif";
import colorBar from "../../images/line.gif";

function StarsGif() {
  const classes = useStyles();

  return (
    <Box className={classes.innerArea}>
      <img src={twinklingStarsGif} alt="Gif of twinkling stars." width={150} />
    </Box>
  );
}

function Header({ year }) {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.logoArea}>
        <StarsGif />
        <Box className={classes.innerArea}>
          <Typography variant="logo">FILMORAMA</Typography>
          <Typography variant="logoYear">{year}</Typography>
        </Box>
        <StarsGif />
      </Box>
      <img src={colorBar} alt="Gif a bar changing color." width="100%" height={10} />
    </Box>
  );
}

export default Header;
