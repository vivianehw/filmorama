import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    display: 'flex',
    width: '100%',
    height: 375,
    padding: 10,
    backgroundColor: 'white',
  },
  border: {
    display: 'flex',
    width: '100%',
    height: '100%',
    padding: 5,
    border: theme.palette.border,
    borderColor: 'gray'
  }
}));

export default useStyles;