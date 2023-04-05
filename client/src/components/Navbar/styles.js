import { makeStyles } from '@material-ui/core/styles';
// import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  heading: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '2em',
    fontWeight: 300,
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: '50px',
    marginTop: '2px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '-107.5px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: '20px',
      justifyContent: 'center',
      marginLeft: '-15px',
    },
  },

  userName: {
    marginLeft: '15px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '15px',
    color: 'greenblue',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
    },
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '-5px',
  },

  purple: {
    backgroundColor: '#EC8673',
    color: '#4A4453',
    marginLeft: '35px',
  },
}));
