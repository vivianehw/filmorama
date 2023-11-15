import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: "black"
  },
  logoArea: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingTop: 20,
  },
  innerArea: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    textAlign: "center",
    alignItems: "center",
  },
}));

export default useStyles;
