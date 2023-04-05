import React from 'react';
import Top from '../Navbar/components/Navbar/index';
import Foot from '../Navbar/Footer';
import './about.css';
import Abt from './about.png';

const About = () => {
  return (
    <>
      <Top />
      <div class="sections">
        <div class="imaged">
          <img src={Abt} style={{ borderRadius: "12px 0 0 12px", marginTop: "20%"}}/>
        </div>

        <div class="content">
          <h2>About Us</h2>
          <span> </span>
          <p>
            Takshak is a platform for organizing a professional and focused
            event, for a particular target audience. It involves visualizing
            concepts, planning, budgeting, organizing and executing events such
            as wedding, musical concerts, corporate seminars, exhibitions,
            birthday celebrations, theme parties, etc. This platform includes
            fields such as the MICE (Meetings, Incentives and Events),
            exhibitions, conferences and seminars as well as live music and
            sporting events. On the profession side, Takshak is a glamorous and
            exciting profession that demands a lot of hard work and dynamism.
          </p>
          <ul class="links">
            <li>
              <a href="#">Creating</a>
            </li>
            <div class="vertical-line"></div>
            <li>
              <a href="#">Managing</a>
            </li>
            <div class="vertical-line"></div>
            <li>
              <a href="#">Maintaining</a>
            </li>
          </ul>
          <ul class="icons">
            <li>
              <i class="fa fa-twitter"></i>
            </li>
            <li>
              <i class="fa fa-linkedin"></i>
            </li>
            <li>
              <i class="fa fa-github"></i>
            </li>
            <li>
              <i class="fa fa-slack"></i>
            </li>
          </ul>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default About;
