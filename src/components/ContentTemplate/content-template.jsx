import React from "react";
import { Box } from "@mui/material";

import Header from "../Header";
import ContentMenu from "./components/ContentMenu";
import SideMenu from "./components/SideMenu";

import useStyles from "./content-template-style";

function ContentTemplate({ page, year }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Header randomYear={year}/>
      <Box style={{ backgroundColor: "black", marginTop: 30 }}>
        <Box className={classes.contentContainer}>
          <ContentMenu />
          <Box style={{ display: "flex" }}>
            <Box className={classes.filmPageContainer}>{page}</Box>
            <SideMenu />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ContentTemplate;
