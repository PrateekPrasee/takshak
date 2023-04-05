import React, { useRef, useState } from 'react';
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPostsBySearch } from '../../actions/posts';
import ChipInput from 'material-ui-chip-input';

import Pagination from '../Pagination';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

import useStyles from './styles';
import './marquee.css';
import Man from './images/welcome.png';
import Intro from './intro';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useHistory();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);

  const searchPost = () => {
    if (search.trim() || tags) {
      //dispatch -> fetch search post
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));

      history.push(
        `/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`,
      );
    } else {
      history.push('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      //search post
      searchPost();
    }
  };

  const handleAdd = (tag) => setTags([...tags, tag]);

  const handleDelete = (tagToDelete) =>
    setTags(tags.filter((tag) => tag !== tagToDelete));

  const scrollToTop = () => {
    window.scroll({
      top: 750,
      behavior: 'smooth',
    });
  };

  return (
    <Grow in>
      <Container maxWidth="xl">
        <div className="landing">
          <img src={Man} id="welcome" width="300" />
          {/* <Slides /> */}
          <div class="wrapper">
            <div class="static-txt">Hi, I'm</div>
            <ul class="dynamic-txts">
              <li>
                <span>Taks</span>
              </li>
              <li>
                <span>Taks</span>
              </li>
              <li>
                <span>Taks</span>
              </li>
              <li>
                <span>Taks</span>
              </li>
            </ul>
            <br />
          </div>
          <div class="static">
            <ul class="dyn-txts">
              <li>
                <span>Welcome you to the Takshak</span>
              </li>
               <li>
                <span>Welcome you to the Takshak</span>
              </li>
              <li>
                <span>Welcome you to the Takshak</span>
              </li>
              <li>
                <span>Welcome you to the Takshak</span>
              </li>
            </ul>
          </div>

          <button class="button-89" onClick={scrollToTop}>
            Know More
          </button>
          {/* <img src={Man} width="200" id="welcome" /> */}
        </div>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>
              <Typography
                variant="h6"
                align="center"
                style={{ fontSize: '12px' }}
              >
                <marquee
                  width="90%"
                  direction="up"
                  height="90px"
                  scrollamount="2"
                  className="space"
                >
                  <b>
                    <i>
                      ॐ हौं जूं स: ॐ भूर्भुव: स्व: ॐ त्र्यम्बकं यजामहे सुगन्धिं
                      पुष्टिवर्धनम् उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय
                      मामृतात् ॐ स्व: भुव: भू: ॐ स: जूं हौं ॐ !!{' '}
                    </i>
                  </b>
                </marquee>
              </Typography>
            </Paper>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                label="Search Your Venue"
                onKeyPress={handleKeyPress}
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <ChipInput
                style={{ margin: '10px 0px' }}
                value={tags}
                onAdd={handleAdd}
                onDelete={handleDelete}
                label="Search Location(ex. Delhi)"
              />
              <Button
                onClick={searchPost}
                className={classes.searchButton}
                variant="contained"
                color="primary"
              >
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            {!searchQuery && !tags.length && (
              <Paper elevation={6} className={classes.pagination}>
                <Pagination page={page} />
              </Paper>
            )}
          </Grid>
        </Grid>
        <Intro />
      </Container>
    </Grow>
  );
};

export default Home;
