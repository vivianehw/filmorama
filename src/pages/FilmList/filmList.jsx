import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

import api from "../../routes/api";
import ListItem from "../../components/ListItem";

import useStyles from "./filmList-style";

function FilmList({ language }) {
  const classes = useStyles();

  const [filmData, setFilmData] = useState([]);
  const { year } = useParams();

  const filmInfo = filmData.results || [];

  useEffect(() => {
      api
        .get(
          `discover/movie?include_adult=false&language=${language}&page=1&primary_release_year=${year.substr(
            year.length - 4
          )}&sort_by=popularity.desc`
        )
        .then((response) => {
          setFilmData(response.data || []);
          // setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          // setIsLoading(false);
        });
  }, []);

  return (
    <Box component="ul" className={classes.container}>
      <ListItem filmInfo={filmInfo} />
    </Box>
  );
}

export default FilmList;
