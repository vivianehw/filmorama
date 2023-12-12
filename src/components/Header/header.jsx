import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import twinklingStarsGif from "../../images/star1.gif";
import colorBar from "../../images/line.gif";

import useStyles from "./header-style";

function StarsGif() {
  const classes = useStyles();

  return (
    <Box className={classes.innerArea}>
      <img src={twinklingStarsGif} alt="Gif of twinkling stars." width={150} />
    </Box>
  );
}

function Header({ randomYear }) {
  const classes = useStyles();

  const location = useLocation();

  const [year, setYear] = useState(randomYear);

  useEffect(() => {
    const pathname = location.pathname;
    const match = pathname.match(/year=(\d{4})/);

    if (match) {
      setYear(match[1]);
    } else {
      setYear(randomYear);
    }
  }, [location.pathname]);

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
      <img
        src={colorBar}
        alt="Gif a bar changing color."
        width="100%"
        height={10}
      />
    </Box>
  );
}

export default Header;
