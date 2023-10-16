import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./home-style";

import Header from "../../components/Header/";

function Home() {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Header />
      <Typography variant="h1">Home</Typography>
    </Box>
  );
}

export default Home;
