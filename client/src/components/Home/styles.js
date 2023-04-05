import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    marginTop: '75px',
    borderRadius: 10,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
    edit: {
      marginTop: '-4px',
    },
  },
  paper: {
    marginTop: '30px',
    marginBottom: '-55px',
    padding: theme.spacing(2),
  },
}));
