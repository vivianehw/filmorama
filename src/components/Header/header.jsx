import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./header-style";

function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography>header</Typography>
    </Box>
  );
}

export default Header;
