import React, { useState, useEffect } from 'react';
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
} from './SidebarElements';

import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { Avatar, Button, Typography } from '@material-ui/core';
import * as actionType from '../../../../constants/actionTypes';
import useStyles from '../../../Navbar/styles';

const Side = ({ isOpen, toggle }) => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  function refreshPage() {
    window.location.reload(false);
  }

  const onLinkClick = (e) => {
    e.preventDefault();
    history.push('/posts');
    window.location.reload(false);
    window.location.reload(false);
  };

  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/posts" onClick={onLinkClick}>
            Home
          </SidebarLink>
          <SidebarLink to="/posts" onClick={onLinkClick}>
            About Us
          </SidebarLink>
          <SidebarLink to="/posts" onClick={onLinkClick}>
            Contact Us
          </SidebarLink>
          <SidebarLink to="##" onClick={refreshPage}>
            Refresh The Page &#10227;
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          {user ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                alt={user.result.name}
                src={user.result.imageUrl}
              >
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user.result.name}
                <span style={{ fontSize: '18px' }}>🎉</span>
              </Typography>
              <span onClick={refreshPage}>
                <Button
                  style={{
                    border: '1px solid red',
                    marginLeft: '50px',
                    marginRight: '20px',
                    padding: '15px 45px',
                    borderRadius: '15px',
                    color: 'red',
                  }}
                  onClick={logout}
                >
                  Logout
                </Button>
              </span>
            </div>
          ) : (
            <span onClick={refreshPage}>
              <Button
                style={{
                  color: '#fff',
                  border: '1px solid green',
                  padding: '15px 45px',
                  backgroundColor: 'lightorange',
                  borderRadius: '15px 15px',
                }}
                component={Link}
                to="/auth"
              >
                Signin
              </Button>
            </span>
          )}
        </SideBtnWrap>
      </SidebarWrapper>
    </SideBarContainer>
  );
};

export default Side;
