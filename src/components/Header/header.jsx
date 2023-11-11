import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./header-style";

function Header({ year }) {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="logo">FILMORAMA</Typography>
      <Typography variant="logoYear">{year}</Typography>
    </Box>
  );
}

export default Header;
