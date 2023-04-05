import React from 'react';
import './intro.css';
import Dev from './images/dev.png';
const Intro = () => {
  return (
    <>
    <div class="heads"> Meet Our Team
    <span> </span>
    </div>
    <div class="mained">
      <div class="profile-card">
        <div class="image">
          <img src={Dev} />
        </div>
        <div class="caption">
          <h3>Prateek Prasee</h3>
          <p>Developer</p>
          <div class="social-links">
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="profile-card1">
        <div class="image">
          <img src={Dev} />
        </div>
        <div class="caption">
          <h3>Chitvan Singhal</h3>
          <p>Developer</p>
          <div class="social-links">
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="profile-card2">
        <div class="image">
          <img src={Dev} />
        </div>
        <div class="caption">
          <h3>Rishabh Saxena</h3>
          <p>Developer</p>
          <div class="social-links">
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="profile-card3">
        <div class="image">
          <img src={Dev} />
        </div>
        <div class="caption">
          <h3>Nikhil Parmar</h3>
          <p>Developer</p>
          <div class="social-links">
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Intro;
