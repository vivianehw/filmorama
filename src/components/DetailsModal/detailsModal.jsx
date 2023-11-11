import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./detailsModal-style";

function DetailsModal() {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.posterBorder}>
        <p>test</p>
      </Box>
    </Box>
  );
}

export default DetailsModal;
