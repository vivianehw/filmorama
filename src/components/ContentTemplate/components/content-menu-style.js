/* eslint-disable no-undef */
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    padding: 0,
    margin: 0,
    borderBottom: "3px solid white",
    listStyleType: "none",
    backgroundColor: "#1f2030",
  },
  menuItems: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    padding: "4px 10px",
    borderRight: "2px solid white",
  },
  clickableItems: {
    backgroundColor: "rgba(255, 255, 255, .1)",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgba(255, 255, 255, .2)",
    },
  },
  divisorRight: {
    borderRight: "2px solid white",
  },
  divisorLeft: {
    borderLeft: "2px solid white",
  },
}));

export default useStyles;
