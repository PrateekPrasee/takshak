import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdb-react-ui-kit';
import { Icon } from '@iconify/react';
import logo from '../../images/flag.png';
import { SocialIcon } from 'react-social-icons';
import mongo from './images/mongodb.png';
import express from './images/express.png';
import react from './images/react.png';
import node from './images/nodejs.png';

export default function App() {
  return (
    <MDBFooter bgColor="white" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <SocialIcon
              style={{ height: 25, width: 25 }}
              className="icon"
              url="https://linkedin.com/"
            />
          </a>
          <a href="" className="me-4 text-reset">
            <SocialIcon
              style={{ height: 25, width: 25 }}
              className="icon"
              url="https://github.com/"
            />
          </a>
          <a href="" className="me-4 text-reset">
            <SocialIcon
              style={{ height: 25, width: 25 }}
              className="icon"
              url="https://slack.com/"
            />
          </a>
          <a href="" className="me-4 text-reset">
            <SocialIcon
              style={{ height: 25, width: 25 }}
              className="icon"
              url="https://telegram.com/"
            />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <h1 className="me-3" color="black" />
                <Icon
                  icon="fa:diamond"
                  style={{ height: 25, width: 25, color: '#B561E0' }}
                />
                <span style={{ color: '#4650F1' }}> Takshak </span>
              </h6>
              <p>
                <span style={{ color: '#9B89B3' }}>
                  Takshak Web Application is an application for organizing a
                  professional and focused event, for a particular target
                  audience.
                </span>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 p-2 border-bottom">
                Products
              </h6>
              <p>
                <a
                  href="#!"
                  style={{ textDecoration: 'none' }}
                  className="text-reset"
                >
                  Teams
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  style={{ textDecoration: 'none' }}
                  className="text-reset"
                >
                  Advertising
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  style={{ textDecoration: 'none' }}
                  className="text-reset"
                >
                  Collectives
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  style={{ textDecoration: 'none' }}
                  className="text-reset"
                >
                  Talent
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 p-2 border-bottom">
                Company
              </h6>
              <p>
                <a
                  href="#!"
                  style={{ textDecoration: 'none' }}
                  className="text-reset"
                >
                  About
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  style={{ textDecoration: 'none' }}
                  className="text-reset"
                >
                  Work Here
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  style={{ textDecoration: 'none' }}
                  className="text-reset"
                >
                  Privacy Policy
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  style={{ textDecoration: 'none' }}
                  className="text-reset"
                >
                  Terms of Services
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 p-2 border-bottom">
                Contact
              </h6>
              <p>
                <h1 className="me-2" />
                <Icon
                  icon="carbon:location-company-filled"
                  style={{ height: 25, width: 25, color: '#00C9A7' }}
                />{' '}
                Varanasi, UP 221106, IND
              </p>
              <p>
                <h1 icon="envelope" className="me-3" />
                <Icon
                  icon="entypo:mail"
                  style={{ height: 25, width: 25, color: '#FFC75F' }}
                />{' '}
                feedback@durasayah.com
              </p>
              <p>
                <h1 icon="phone" className="me-3" />
                <Icon
                  icon="fluent:call-28-filled"
                  style={{ height: 25, width: 25, color: '#0081CF' }}
                />{' '}
                +91-9117291729
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section className="border-top">
        <div className="text-center p-4" style={{ backgroundColor: 'white' }}>
          <h1 className="modify">
            <h1 className="brand3">
              Coded with ❤️ using <img src={mongo} height="22px" alt="logo" />{' '}
              <img src={express} height="22px" alt="logo" />{' '}
              <img src={react} height="22px" alt="logo" />
              <img src={node} height="29px" alt="logo" /> in <b>भारत</b>
              <img src={logo} alt="logo" width="55px" height="55px" />
            </h1>
            <h1 className="brand3">
              by <b>@Takshak_Team</b> 🤙, 2019-2023
            </h1>
            {/* <br /> */}
            <h1 className="brand2">
              <b> Takshak Web Application</b> is an application for organizing a
              professional and focused event, for a particular target audience.
              You agree to have read and accepted our terms of use,{' '}
              <a href="##" style={{ textDecoration: 'none' }}>
                cookies
              </a>{' '}
              and{' '}
              <a href="##" style={{ textDecoration: 'none' }}>
                privacy policy
              </a>
              .
            </h1>
            <h1 className="brand2">
              &#169; Copyright 2022 by <b>Kawachine</b>. All Rights Reserved.
              Takshak is Powered by <b>Kawachine</b>.
            </h1>
            <br />
          </h1>
        </div>
      </section>
    </MDBFooter>
  );
}
