import React, { useState, useRef } from 'react';

import './styles.css';
import { Typography, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { commentPost } from '../../actions/posts';
// import DeleteIcon from '@material-ui/icons/Delete';
// import App from '../qrcode/App';
import { Divider } from '@material-ui/core';
// import { deleteCommentPost } from '../../actions/posts';
// import Apps from '../../feedback/apps';
// import 'semantic-ui-css/semantic.min.css';

// import App from '../../payment/App';
// import Form from '../../payment/payment.html';
// import * as serviceWorker from '../../payment/serviceWorker';
import Pay from '../../payment/App';
import Rating from '../../Rating/rating';

const CommentSection = ({ post }) => {
  const classes = useStyles();
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState('');
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  const commentsRef = useRef();

  const handleClick = async () => {
    const finalComment = `${user.result.name}: ${comment}`;

    const newComments = await dispatch(commentPost(finalComment, post._id));
    setComments(newComments);
    setComment('');

    commentsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {user?.result?.name && <Divider style={{ margin: '20px 0' }} />}
      {user?.result?.name && (
        <h1 style={{ fontSize: '22px', color: 'Green' }}>Rate Us:</h1>
      )}
      {user?.result?.name && <Rating />}
      <Divider style={{ margin: '20px 0' }} />
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography
            gutterBottom
            variant="h6"
            style={{ fontWeight: '600', color: '#296073' }}
          >
            Comments &#9989;
          </Typography>
          {comments.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              <span style={{ color: '#936C00' }}>
                <strong>{c.split(': ')[0]}</strong>
              </span>
              <span style={{ color: '#845EC2', fontStyle: 'italic' }}>
                {c.split(':')[1]}{' '}
              </span>
            </Typography>
          ))}
          <div ref={commentsRef} />
        </div>

        {user?.result?.name && (
          <div style={{ width: '70%' }}>
            <Typography gutterBottom variant="h6">
              Write a Comment &#128221;
            </Typography>
            <TextField
              fullWidth
              minRows={4}
              label="Comment"
              multiline
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button
              style={{ marginTop: '10px' }}
              fullWidth
              disabled={!comment}
              color="primary"
              variant="contained"
              onClick={handleClick}
            >
              Comment &#128172;
            </Button>
          </div>
        )}
      </div>
      <br />
      <Divider style={{ margin: '20px 0' }} />
      {user?.result?.name && <Pay />}

      <Divider style={{ margin: '20px 0' }} />
      {/* <Apps /> */}
    </div>
  );
};

// serviceWorker.unregister();
export default CommentSection;
