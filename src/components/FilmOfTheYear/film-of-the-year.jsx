import React from "react";
import { Box, Typography } from "@mui/material";
import ComponentBox from "../ComponentBox";
import useStyles from "./film-of-the-year-style";

function FilmOfTheYear() {
  const classes = useStyles();

  return (
    <ComponentBox style={{ marginTop: 30 }}>
      <Box className={classes.container}>
        <Typography variant={"h2"}>Filme do Ano</Typography>
      </Box>
    </ComponentBox>
  );
}

export default FilmOfTheYear;
