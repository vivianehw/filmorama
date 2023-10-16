import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    backgroundColor: theme.palette.background.default,
  },
  contentContainer: {
    display: 'flex',
    width: '100%',
    margin: 15,
    padding: 20,
    justifyContent: 'center',
    border: theme.palette.border,
  },
}));

export default useStyles;