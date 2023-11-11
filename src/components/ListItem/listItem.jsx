import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./listItem-style";

import detailsModal from "../DetailsModal";
import BrokenImage from "../BrokenImage";

function ListItem({ filmInfo }) {
  const classes = useStyles();

  const getPoster = (film) => {
    const baseUrl = "https://image.tmdb.org/t/p";
    const fileSize = "/w300";
    const filePath = film.poster_path;

    return baseUrl + fileSize + filePath;
  };

  return (
    <>
    <detailsModal></detailsModal>
      {filmInfo.map((film) => (
        <Typography component="li" className={classes.container}>
          <Box className={classes.posterBorder}>
            {film.poster_path ? (
              <img src={getPoster(film)} alt="Film poster" width={250} />
            ) : (
              <BrokenImage />
            )}
            <Typography variant="a" style={{ marginTop: 10 }}>
              {film.title}
            </Typography>
          </Box>
        </Typography>
      ))}
    </>
  );
}

export default ListItem;
