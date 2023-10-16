import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./content-template-style";

import Header from '../Header/header';
// import FilmOfTheYear from "../FilmOfTheYear";
import ContentMenu from "./components/content-menu";

function ContentTemplate() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Header />
      <Box style={{ backgroundColor: "black", marginTop: 30 }}>
        <Box className={classes.contentContainer}>
          <ContentMenu />
          <Typography variant="h1">Home</Typography>
          <Typography variant="h1">Home</Typography>
          <Typography variant="h1">Home</Typography>
          <Typography variant="h1">Home</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ContentTemplate;
