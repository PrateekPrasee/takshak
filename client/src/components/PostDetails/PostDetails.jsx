import React, { useEffect, useState } from 'react';
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';

import CommentSection from './CommentSection';
import useStyles from './styles';
import { getPost, getPostsBySearch } from '../../actions/posts';

import App from '../Navbar/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Navbar/Footer';
import { FaArrowCircleUp } from 'react-icons/fa';
import ScrollButton from '../Navbar/ScrollButton';
import Check from '../Posts/Post/image/check.svg';
import { Icon } from '@iconify/react';
import Loc from './images/loc.png';
import Mob from './images/mob.png';


const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  const [state, setState] = useState(
    window.matchMedia('(min-width: 1024px)').matches || false,
  );
  const [isOpen, setIsOpen] = useState(false);

  //---------------

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { open } = state;
  const mobile = window.matchMedia('(max-width: 768px)').matches;
  console.log(mobile, open);

  //-----------------

  useEffect(() => {
    dispatch(getPost(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

  if (!post) return null;

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPage}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  const openPost = (_id) => history.push(`/posts/${_id}`);



  return (
    <>
      <App />
      <h1 style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
        <div className={classes.card}>
          <div className={classes.section}>
            <Typography variant="h3" component="h2">
              {post.title || 'Takshak'}
            </Typography>
            <div style={{display: "flex", justifyContent: "space-between"}}>
            <Typography
              style={{marginTop: "18px"}}
              gutterBottom
              variant="h6"
              color="textSecondary"
              component="h2"
            >
              <Icon
                  icon="carbon:location-company-filled"
                  style={{ height: 25, width: 25, color: 'red' }}
                />{' '}
              {post.tags.map((tag) => `${tag}`)}
            </Typography>
            <div class="verify">
             <img
              src={Check}
              alt="Verified"
              height={'58px'}
            /></div>
            </div>
            <br />
            <Typography
              gutterBottom
              variant="body1"
              component="p"
              style={{ textAlign: 'justify' }}
            >
              {post.message || 'Coded with ❤️ using MERN in भारत'}
            </Typography>
            <Divider style={{ margin: '20px 0' }} />
            <Typography variant="h6">Created by: {post.name}</Typography>
            <Typography variant="body1">
              {moment(post.createdAt).fromNow()}
            </Typography>
            <Divider style={{ margin: '20px 0' }} />
          </div>
          <div className={classes.imageSection}>
            <img
              className={classes.media}
              src={
                post.selectedFile ||
                'https://github.com/PrateekPrasee/demo/blob/main/Logo%20Low.png?raw=true'
              }
              alt={post.title}
            />
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.section}>
          <div class="p1">Contact Details</div>
          <Typography
              gutterBottom
              variant="body1"
              component="p"
              style={{ textAlign: 'justify' }}
              class="loc"
            >
             <img src={Loc} alt="Location" />{' '}<a href={post.local} target="_blank">{post.about || 'About'}</a>
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              component="p"
              style={{ textAlign: 'justify' }}
            >
             <img src={Mob} alt="Location" height="38px" width="38px"/>{' '}<span class="mob">{post.mob || 'Mobile No.'}</span>
            </Typography>
            <Divider style={{ margin: '20px 0' }} />
  
            <div class="p1">Venue Policies</div>
            <div class="p2">
              <div>
              <div class="head">Timing and Slots</div>
              <Typography class="sub-head">{post.timing || 'Not Available'}</Typography>
              <div class="head">Morning Slots</div>
              <Typography class="sub-head">{post.morning || 'Not Available'}</Typography>
              <div class="head">Taxes</div>
              <Typography class="sub-head">{post.taxes || 'Not Available'}</Typography>
              <div class="head">Advance</div>
              <Typography class="sub-head">{post.advance || 'Not Available'}</Typography>
              </div>
              <div>
                <div class="head">Rooms</div>
                <Typography class="sub-head">{post.rooms || 'Not Available'}</Typography>
                <div class="head">Cancellation Charges</div>
                <Typography class="sub-head">{post.cancellation || 'Not Available'}</Typography>
                <div class="head">Alcohol</div>
                <Typography class="sub-head">{post.alcohol || 'Not Available'}</Typography>
                </div>
                <div>
              <div class="head">Others</div>
              <Typography class="sub-head">{post.other || 'Nothing'}</Typography>
            </div>
            </div>
            <CommentSection post={post} />
            <Divider style={{ margin: '20px 0' }} />
          </div>
        </div>
        <br />
        {recommendedPosts.length && (
          <div className={classes.section}>
            <Typography gutterBottom variant="h5">
              Recommendation:{' '}
            </Typography>
            <Divider />
            <div className={classes.recommendedPosts}>
              {recommendedPosts.map(
                ({ title, message, name, likes, selectedFile, _id }) => (
                  <div
                    style={{ margin: '20px', cursor: 'pointer' }}
                    onClick={() => openPost(_id)}
                    key={_id}
                  >
                    <Typography gutterBottom variant="h6">
                      {title}
                    </Typography>
                    <Typography gutterBottom variant="subtitle2">
                      {name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      style={{ textAlign: 'justify' }}
                    >
                      {message}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                      Likes: {post.likes.length}
                    </Typography>
                    <img src={selectedFile} alt="photu" width="200px" />
                  </div>
                ),
              )}
            </div>
          </div>
        )}
      </h1>
      <Divider style={{ margin: '50px 0' }} />
      <Footer />
      <ScrollButton />
      <div
        _ngcontent-d2c-frontend-c24=""
        class="mobile_btm_menu ng-star-inserted"
      >
        <a _ngcontent-d2c-frontend-c24="" href="/posts" class="asfads">
          <div _ngcontent-d2c-frontend-c24="">
            <img
              _ngcontent-d2c-frontend-c24=""
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/mobile-icon/home-icon.svg"
              alt="Home Icon"
              width="20"
              height="22"
              loading="lazy"
              class="ng-star-inserted"
            />
          </div>
          <span _ngcontent-d2c-frontend-c24="">Home</span>
        </a>
        <a _ngcontent-d2c-frontend-c24="" href="/#" id="e-btn-003">
          <div _ngcontent-d2c-frontend-c24="">
            <img
              _ngcontent-d2c-frontend-c24=""
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/mobile-icon/host-icon.svg"
              alt="Host Icon"
              width="23"
              height="22"
              loading="lazy"
              class="ng-star-inserted"
            />
          </div>
          <span _ngcontent-d2c-frontend-c24="" class="min_width">
            Working on it...
          </span>
        </a>

        <a id="e-btn-003">
          <span
            style={{
              fontSize: '140%',
              marginTop: '-8px',
              marginBottom: '-3px',
            }}
          >
            <FaArrowCircleUp
              alt="Explore Icon"
              loading="lazy"
              onClick={scrollToTop}
            />
          </span>
          <span _ngcontent-d2c-frontend-c24="">Go To Top</span>
        </a>

        <a _ngcontent-d2c-frontend-c24="" href="/auth">
          <div _ngcontent-d2c-frontend-c24="">
            <img
              _ngcontent-d2c-frontend-c24=""
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/mobile-icon/registrations-icon.svg"
              alt="Registrations Icon"
              width="17"
              height="22"
              loading="lazy"
            />
          </div>
          <span _ngcontent-d2c-frontend-c24="">Sign In/Up</span>
        </a>

        <a _ngcontent-d2c-frontend-c24="">
          <div _ngcontent-d2c-frontend-c24="" class="dropup">
            <button class="dropbtn">
              <img
                _ngcontent-d2c-frontend-c24=""
                height="85px"
                width="75px"
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/mobile-icon/menu-icon.svg"
                alt="Menu Icon"
                loading="lazy"
              />
            </button>
            <div class="dropup-content">
              <a href="#">CommingSoon</a>
              <a href="#">CommingSoon</a>
              <a href="#">CommingSoon</a>
            </div>
            <span
              _ngcontent-d2c-frontend-c24=""
              style={{ marginTop: '-5px', marginBottom: '8px' }}
            >
              Menu
            </span>
          </div>
        </a>
      </div>
    </>
  );
};

export default PostDetails;
