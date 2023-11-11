import React from "react";
import { Box } from "@mui/material";
import useStyles from "./content-template-style";

import Header from '../Header/header';
import ContentMenu from "./components/content-menu";

function ContentTemplate({page, year}) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Header year={year}/>
      <Box style={{ backgroundColor: "black", marginTop: 30 }}>
        <Box className={classes.contentContainer}>
          <ContentMenu />
            <Box className={classes.pageContainer}>
            {page}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ContentTemplate;
