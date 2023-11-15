import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useStyles from "./filmList-style";

import ListItem from "../../components/ListItem";

function FilmList({ filmData, year }) {
  const classes = useStyles();
  const navigate = useNavigate();

  const filmInfo = filmData.results || [];

  useEffect(() => {
    if (filmData && filmData.results && filmData.results.length > 0) {
      function redirectToYear() {
        const filmReleaseDate = filmInfo[0].release_date;
        navigate(`/${'year=' + filmReleaseDate.slice(0, 4)}/film_list`);
      }

      redirectToYear();
    }
  }, [filmData]);

  return (
    <Box component="ul" className={classes.container}>
      <ListItem filmInfo={filmInfo} />
    </Box>
  );
}

export default FilmList;
