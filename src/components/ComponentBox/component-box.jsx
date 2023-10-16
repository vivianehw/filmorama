import React from "react";
import { Box } from "@mui/material";

function ComponentBox({ style, children }) {
  return (
    <Box style={{ ...style, display: "flex", backgroundColor: "black" }}>
      {children}
    </Box>
  );
}

export default ComponentBox;
