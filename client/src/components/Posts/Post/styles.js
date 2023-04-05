import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    // height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '88%',
  },
  card: {
    marginTop: '65px', // space for card from the top
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '90%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  overlay3: {
    position: 'absolute',
    top: '18px',
    right: '55px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '24px',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 20px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
  lim: {
    wordBreak: 'break-word',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'block',
    //  lineHeight: '18px',
    //  maxHeight: '100px',
    //  webkitLineClamp: '3',
    whiteSpace: 'nowrap',
    webkitBoxOrient: 'vertical',
    fontSize: '18px',
  },
}));
