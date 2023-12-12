import React from "react";
import { Box } from "@mui/material";
import background from "../../images/stars-background.jpg";
// import background from "../../images/star-loop.gif";
import useStyles from "../Background/background-style";

function Background({ children }) {
  const classes = useStyles();

  return (
    <Box
      className={classes.container}
      style={{
        margin: 0,
        overflowY: 'scroll',
        backgroundImage: `url(${background})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      {children}
    </Box>
  );
}

export default Background;
