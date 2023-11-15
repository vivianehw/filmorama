import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home({ filmData, year }) {
  const navigate = useNavigate();

  function redirectToYear() {
    navigate(`/${'year=' + year}/film_list`);
  }

  redirectToYear();

  return (
    <Box>
      <Typography variant="h1">Home!</Typography>
      <Typography variant="p">
        Lorem ipsum dolor sit amet. Est rerum vitae ut iure quae ut voluptatum
        perspiciatis ut provident illum. Et quia itaque eos magni adipisci a
        debitis magni. Est magnam dolorem aut libero quod qui cumque soluta cum
        similique corrupti est quis sequi aut maiores sint non perferendis
        nesciunt. Ea magnam soluta et consequatur ratione aut iste nihil. Aut
        reprehenderit fugit est iure nesciunt qui culpa saepe. Sit excepturi
        recusandae et voluptatibus reprehenderit et libero repellendus. Ab
        praesentium pariatur et ipsam facilis aut sint rerum quo error galisum
        sit perspiciatis dolor At consectetur assumenda. Qui voluptas magnam eos
        aliquam praesentium et numquam veniam. Et iure quibusdam non nihil
        voluptas in dolor voluptatem eos dolorem voluptatem in illo enim? Et
        internos praesentium aut voluptatibus laborum eum quos quos.
      </Typography>
      <Typography variant="h2">Seja bem vindo!</Typography>
      <Typography variant="h3">Seja bem vindo!</Typography>
      <Typography variant="h4">Seja bem vindo!</Typography>
      <Typography variant="h5">Seja bem vindo!</Typography>
      <Typography variant="h6">Seja bem vindo!</Typography>
    </Box>
  );
}

export default Home;
