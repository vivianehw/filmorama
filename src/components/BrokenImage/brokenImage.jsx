import React from "react";
import brokenIcon from "../../images/netscape-broken-image-icon.png";
import { Box } from "@mui/material";

import useStyles from "./broken-image-style";

function BrokenImage({ children }) {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.border}>
        <img src={brokenIcon} alt="No poster" width={30} height={30} />
      </Box>
    </Box>
  );
}

export default BrokenImage;
