import React, { useState, useEffect } from "react";
import { Box, Typography, Modal } from "@mui/material";
import useStyles from "./detailsModal-style";

import filmMovieGif from "../../images/film-movie.gif";
import getPoster from "../../utils/getPoster";
import BrokenImage from "../BrokenImage";
import loadingGif from "../../images/loading1.gif";
import api from "../../routes/api";

function FilmMovieGif() {
  return (
    <img
      src={filmMovieGif}
      alt="camera film passing by"
      width="100%"
      height={100}
      style={{ marginBottom: 25 }}
    />
  );
}

function DetailsModal({ open, handleClose, film }) {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    if (film.genre_ids !== null) {
      api
        .get(`genre/movie/list`)
        .then((response) => {
          setGenreList(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }
  }, []);

  console.log(genreList);

  const getGenre = () => {
    if (!film.genre_ids || !genreList || !genreList.genres) {
      return "Genre not available";
    }

    const genres = genreList.genres.filter((genre) =>
      film.genre_ids.includes(genre.id)
    );

    if (genres.length === 0) {
      return "Genre not found";
    }

    return genres.map((genre) => genre.name).join(" - ");
  };

  console.log(isLoading);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box className={classes.container}>
        {!isLoading ? (
          <>
            <Box className={classes.innerArea} style={{ marginRight: 20 }}>
              <Box>
                <Typography id="modal-modal-title" variant="h4" component="h2">
                  {film.title}
                </Typography>

                <Typography variant="h5">{getGenre()}</Typography>
              </Box>

              <Box>
                {film.poster_path ? (
                  <img src={getPoster(film)} alt="Film poster" width={350} />
                ) : (
                  <BrokenImage />
                )}
              </Box>
            </Box>

            <Box className={classes.innerArea} style={{ marginLeft: 20 }}>
              <Box>
                <Typography id="modal-modal-title" variant="h4" component="h2">
                  {film.title}
                </Typography>

                <Typography variant="h5">{getGenre()}</Typography>
              </Box>

              <FilmMovieGif />

              <Typography variant="p" style={{ textAlign: "justify" }}>
                {film.overview}
              </Typography>
            </Box>
          </>
        ) : (
          <img src={loadingGif} alt="A 'loading...' writing changing color." />
        )}
      </Box>
    </Modal>
  );
}
export default DetailsModal;
