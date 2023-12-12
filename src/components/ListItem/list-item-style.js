import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  posterBorder: {
    display: 'flex',
    flexDirection: 'column',
    width: 296,
    height: 461,
    padding: 20,
    margin: 20,
    border: theme.palette.border,
    "&:hover": {
      cursor: "pointer",
      color: theme.palette.text.hoverButton,
      borderColor: 'cyan',
    },
  },
  poster: {
    width: 250,
    height: 300,
    marginBottom: 10,
    backgroundColor: "blue"
  },
}));

export default useStyles;