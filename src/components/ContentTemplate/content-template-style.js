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
  },
  filmPageContainer: {
    display: 'flex',
    width: '100%',
    margin: 15,
    marginTop: 40,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useStyles;