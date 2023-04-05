import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavItem,
  NavMenu,
  MobileIcon,
  NavLink,
  NavBtn,
  NavLogo,
} from './NavbarElements';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { Avatar, Button, Typography } from '@material-ui/core';
import * as actionType from '../../../../constants/actionTypes';
import useStyles from '../../../Navbar/styles';
import {
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import Top from '../../../About/about';

const Navbar = ({ toggle }) => {
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
  };

  const onPrevClick = (e) => {
    e.preventDefault();
    history.push('/posts');
  };

  const onAboutClick = (e) => {
    e.preventDefault();
    history.push('/about');
    window.location.reload(false);
  };

  const onContactClick = (e) => {
    e.preventDefault();
    history.push('/contact');
    window.location.reload(false);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <img
              width="100%"
              height="85%"
              src={require('../../images/logo.svg')}
              alt="logo"
            />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="/posts" onClick={onLinkClick}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" onClick={onAboutClick}>
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" onClick={onContactClick}>
                Contact Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/post" onClick={onPrevClick}>
                <UncontrolledDropdown nav inNavbar>
                  <span style={{ color: '#005D4A' }}>
                    <DropdownToggle nav caret>
                      <span style={{ color: '#4B8078' }}>More</span>
                    </DropdownToggle>
                  </span>
                  <DropdownMenu>
                    <DropdownItem>Comming Soon...</DropdownItem>
                    <DropdownItem>Comming Soon...</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={refreshPage}>
                      Refresh The Page &#10227;
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
        <NavBtn>
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
                {user.result.name} <span style={{ fontSize: '18px' }}>🎉</span>
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
                  color: 'green',
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
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
