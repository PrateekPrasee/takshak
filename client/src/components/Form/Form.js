import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';

import { createPost, updatePost } from '../../actions/posts';

// GET THE CURRENT ID

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: '',
    about: '',
    local: '',
    mob: '',
    price: '',
    nonprice: '',
    timing: '',
    morning: '',
    taxes: '',
    advance: '',
    rooms: '',
    cancellation: '',
    alcohol: '',
    other: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const post = useSelector((state) =>
    currentId
      ? state.posts.posts.find((message) => message._id === currentId)
      : null,
  );

  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }, history));
      clear();
    } else {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name }),
      );
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          <i>Please SignIn For Better Experience!</i> &#128513;
        </Typography>
      </Paper>
    );
  }

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: '',
      about: '',
      local: '',
      mob: '',
      price: '',
      nonprice: '',
      timing: '',
      morning: '',
      taxes: '',
      advance: '',
      rooms: '',
      cancellation: '',
      alcohol: '',
      other: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };

  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography
          variant="h6"
          style={{
            fontFamily: 'Times New Roman',
            color: 'blueviolet',
            fontStyle: 'bold',
          }}
        >
          {currentId ? `Editing "${post.title}"` : 'Fill the Information'}
        </Typography>
        <TextField
          name="title"
          label="Title*"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          label="Description*"
          fullWidth
          multiline
          minRows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="about"
          label="Contact Details*"
          fullWidth
          value={postData.about}
          onChange={(e) => setPostData({ ...postData, about: e.target.value })}
        />
        <TextField
          name="local"
          label="Location*"
          fullWidth
          value={postData.local}
          onChange={(e) => setPostData({ ...postData, local: e.target.value })}
        />
         <TextField
          name="mob"
          label="Mobile No.*"
          fullWidth
          value={postData.mob}
          onChange={(e) => setPostData({ ...postData, mob: e.target.value })}
        />
        <TextField
          name="tags"
          label="Location*"
          fullWidth
          multiline
          minRows={2}
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(',') })
          }
        />
        <TextField
          name="price"
          label="₹ Price Veg"
          fullWidth
          value={postData.price}
          onChange={(e) => setPostData({ ...postData, price: e.target.value })}
        />
        <TextField
          name="nonprice"
          label="₹ Price Non-Veg"
          fullWidth
          value={postData.nonprice}
          onChange={(e) =>
            setPostData({ ...postData, nonprice: e.target.value })
          }
        />
        <TextField
          name="timing"
          label="Timing and Slots"
          fullWidth
          value={postData.timing}
          onChange={(e) => setPostData({ ...postData, timing: e.target.value })}
        />
        <TextField
          name="morning"
          label="Morning (AM-PM)"
          fullWidth
          value={postData.morning}
          onChange={(e) => setPostData({ ...postData, morning: e.target.value })}
        />
        <TextField
          name="taxes"
          label="Taxes"
          fullWidth
          value={postData.taxes}
          onChange={(e) => setPostData({ ...postData, taxes: e.target.value })}
        />
        <TextField
          name="advance"
          label="Advance"
          fullWidth
          value={postData.advance}
          onChange={(e) => setPostData({ ...postData, advance: e.target.value })}
        />
        <TextField
          name="rooms"
          label="Rooms"
          fullWidth
          value={postData.rooms}
          onChange={(e) => setPostData({ ...postData, rooms: e.target.value })}
        />
        <TextField
          name="cancellation"
          label="Cancellation Charges"
          fullWidth
          value={postData.cancellation}
          onChange={(e) => setPostData({ ...postData, cancellation: e.target.value })}
        />
        <TextField
          name="alcohol"
          label="Alcohol"
          fullWidth
          value={postData.alcohol}
          onChange={(e) => setPostData({ ...postData, alcohol: e.target.value })}
        />
        <TextField
          name="other"
          label="Other"
          fullWidth
          value={postData.other}
          onChange={(e) => setPostData({ ...postData, other: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          disabled={!postData.title || !postData.message || !postData.about || !postData.local || !postData.mob || !postData.tags}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
