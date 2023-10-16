import React from "react";
import { Box, Typography } from "@mui/material";
import ComponentBox from '../ComponentBox';
import useStyles from "./header-style";

function Header() {
  const classes = useStyles();

  return (
    <ComponentBox>
      <Box className={classes.container}>
        <Typography variant={"h1"}>FILMORAMA</Typography>
      </Box>
    </ComponentBox>
  );
}

export default Header;
