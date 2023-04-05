import React from 'react';
import './contacts.css';
import Top from '../Navbar/components/Navbar/index';
import Foot from '../Navbar/Footer';

export default function App() {
  function Submit(e) {
    const formEle = document.querySelector('form');
    const formDatab = new FormData(formEle);
    fetch(
      'https://script.google.com/macros/s/AKfycbwGk-Fl_WNax6yztwLb4IyXC2QpMI_VPzKDbH9j-qs4gEcpwm07QEizFG6NEKZfrO1x/exec',
      {
        method: 'POST',
        body: formDatab,
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <Top />
      <div className="containers">
        <h1 className="text">Feel Free To Contact Us</h1>
        <div>
          <form className="form" onSubmit={(e) => Submit(e)}>
            <input placeholder="Your Name" name="Name" type="text" />
            <input placeholder="Your Email" name="Email" type="text" />
            <input placeholder="Your Message" name="Message" type="text" />
            <input name="Name" type="submit" />
          </form>
        </div>
      </div>
      <Foot />
    </>
  );
}
