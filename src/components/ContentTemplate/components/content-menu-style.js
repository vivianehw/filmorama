/* eslint-disable no-undef */
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    padding: 0,
    margin: 0,
    listStyleType: "none",
  },
  menuItemsContainer: {
    width: '100%',
    marginRight: 20,
    textAlign: 'center',
  },
  menuItems: {
    display: "flex",
    width: "100%",
    height: '100%',
    alignItems: 'center',
    justifyContent: "center",
    padding: "10px 10px",
    border: theme.palette.border,
    marginRight: 10,
    "&:hover": {
      cursor: "pointer",
      color: theme.palette.text.hoverButton,
      borderColor: theme.palette.text.hoverButton,
    },
  },
  clickableItems: {
    backgroundColor: "rgba(255, 255, 255, .1)",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgba(255, 255, 255, .2)",
    },
  },
  divisorRight: {
    borderRight: "2px solid black",
  },
  divisorLeft: {
    borderLeft: "2px solid white",
  },
}));

export default useStyles;
