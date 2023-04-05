import React, { useState } from 'react';

import './sidebar.css';
import Home from '../Home/Home';
import { Divider } from '@material-ui/core';
import Footer from './Footer';
import ScrollButton from './ScrollButton';
import { FaArrowCircleUp } from 'react-icons/fa';
import App from '../Navbar/App';
import Side from '../Navbar/components/Sidebars/index';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <App />
      <Home />
      <ScrollButton />
      <Divider style={{ margin: '55px 0 10px', borderTop: '3px solid #bbb' }} />

      <Footer />

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

export default Sidebar;
