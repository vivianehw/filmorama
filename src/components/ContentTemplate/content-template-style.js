import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '30px 200px',
    width: '100%',
    height: '100vh',
  },
  contentContainer: {
    margin: 15,
    border: theme.palette.border,
  },
}));

export default useStyles;