import React from "react";
import { Box } from "@mui/material";
import background from "../../images/stars-background.jpg";
import useStyles from "../Background/background-style";

function Background({ children }) {
  const classes = useStyles();

  return (
    <Box
      className={classes.container}
      style={{ backgroundImage: `url(${background})` }}>
      {children}
    </Box>
  );
}

export default Background;
