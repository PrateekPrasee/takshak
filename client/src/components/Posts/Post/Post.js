import React, { useState } from 'react';
import useSound from 'use-sound';
import trash from './sounds/EmptyTrash.mp3';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
  Divider,
} from '@material-ui/core';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { deletePost, likePost } from '../../../actions/posts';
import Check from './image/check.svg';
import Non from './image/non.png';
import Veg from './image/veg.png';
import { Icon } from '@iconify/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [play] = useSound(trash);
  const user = JSON.parse(localStorage.getItem('profile'));
  const [likes, setLikes] = useState(post?.likes);

  const userId = user?.result?.googleId || user?.result?._id;

  const hasLikedPost = likes.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(likes.filter((id) => id !== userId));
    } else {
      setLikes([...likes, userId]);
    }
  };

  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {likes.length > 2
            ? `You and ${likes.length - 1} others`
            : `${likes.length} like${likes.length > 1 ? 's' : ''}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  const openPost = () => history.push(`/posts/${post._id}`);

  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase className={classes.cardAction} onClick={openPost}>
        <CardMedia
          className={classes.media}
          image={
            post.selectedFile ||
            'https://github.com/PrateekPrasee/demo/blob/main/Logo%20Low%20T.png?raw=true'
          }
          title={post.title}
        />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <div className={classes.overlay2} name="edit">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentId(post._id);
              }}
              style={{ color: 'white' }}
              size="small"
            >
              <MoreHorizIcon fontSize="medium" />
            </Button>
          </div>
        )}

        {user?.result?._id === post?.creator && (
          <div className={classes.overlay3} name="edit">
            <Button
              onClick={(e) => {
                e.stopPropagation();
              }}
              style={{ color: 'white' }}
              size="large"
            >
              <div>
                <CopyToClipboard
                  text={`localhost:3000/posts/${post._id}`}
                  onCopy={onCopyText}
                >
                  <span>
                    {isCopied ? 'Post Copied!' : <i class="fa fa-link"></i>}
                  </span>
                </CopyToClipboard>
              </div>
            </Button>
          </div>
        )}

        {user?.result?._id !== post?.creator && (
          <div className={classes.overlay2} name="edit">
            <Button
              onClick={(e) => {
                e.stopPropagation();
              }}
              style={{ color: 'white' }}
              size="large"
            >
              <div title="Click Here To Copy The Post & Share It ❤️">
                <CopyToClipboard
                  text={`localhost:3000/posts/${post._id}`}
                  onCopy={onCopyText}
                >
                  <span>
                    {isCopied ? 'Post Copied!' : <i class="fa fa-link"></i>}
                  </span>
                </CopyToClipboard>
              </div>
            </Button>
          </div>
        )}
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            <Icon
              icon="carbon:location-company-filled"
              style={{ height: 25, width: 25, color: 'red' }}
            />{' '}
            {post.tags.map((tag) => `${tag} `)}
          </Typography>
          <div>
            {' '}
            <img
              src={Check}
              alt="Verified"
              height={'45px'}
              style={{ marginTop: '-18px' }}
            />
          </div>
        </div>
        <Typography
          className={classes.title}
          variant="h5"
          gutterBottom
          component="h2"
        >
          {post.title || 'Takshak'}
        </Typography>
        <CardContent>
          <Typography
            className={classes.lim}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {post.message || 'Takshak'}
          </Typography>
          <br />
          <div>
            <img src={Veg} height={'28px'} /> <b>Veg (per plate):</b>{' '}
            <span style={{ fontSize: '16px' }}>
              ₹{post.price || " Sorry, Not Available😔"}
            </span>
          </div>
          <div>
            <img src={Non} height={'28px'} /> <b> Non-Veg (per plate):</b>{' '}
            <span style={{ fontSize: '16px' }}>
              ₹{post.nonprice || " Sorry, Not Available😔"}
            </span>
          </div>
        </CardContent>
      </ButtonBase>
      <Divider style={{ marginBottom: '15px' }} />
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={handleLike}
        >
          <Likes />
        </Button>

        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <Button
            size="small"
            color="secondary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="small" />
            <span onClick={play}>Delete</span>
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
