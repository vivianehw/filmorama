import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    padding: 20,
    border: theme.palette.border,
    backgroundColor: 'black'
  },
  innerArea: {
    display: 'flex',
    flexDirection: 'column',
  },
  poster: {
    flex: 1,
    border: theme.palette.border,
  },
}));

export default useStyles;