import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./list-item-style";

import getPoster from "../../utils/getPoster";
import BrokenImage from "../../utils/BrokenImage";
import DetailsModal from "../DetailsModal";

function ListItem({ filmInfo }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);

  const handleOpen = (film) => {
    setSelectedFilm(film);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedFilm(null);
    setOpen(false);
  };

  return (
    <>
      {filmInfo.map((film) => (
        <Typography
          component="li"
          key={film.id}
          className={classes.container}
          onClick={() => handleOpen(film)}>
          <Box className={classes.posterBorder}>
            {film.poster_path ? (
              <img
                src={getPoster(film)}
                alt="Film poster"
                width={250}
                style={{ flex: 1 }}
              />
            ) : (
              <BrokenImage />
            )}
            <Typography variant="a" style={{ marginTop: 10 }}>
              {film.title}
            </Typography>
          </Box>
        </Typography>
      ))}
      {selectedFilm && (
        <DetailsModal
          film={selectedFilm}
          open={open}
          handleClose={handleClose}
        />
      )}
    </>
  );
}

export default ListItem;
