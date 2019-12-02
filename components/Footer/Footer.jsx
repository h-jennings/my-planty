import React from 'react';
import './Footer.scss';

function Footer() {
  return (

    <footer className="Footer--wrapper">
      <nav>
        <div className="links--container">
          <ul className="col-left">
            <li className="title">About</li>
            <li>
              <a href="/">
                Our Story
              </a>
            </li>
            <li>
              <a href="/">
                FAQ
              </a>
            </li>
            <li>
              <a href="/">
                Learn
              </a>
            </li>
          </ul>
          <ul className="col-right">
            <li className="title">Contact Us</li>
            <li>
              <a href="/">
                Get in touch
              </a>
            </li>
            <li>
              <a href="/">
                Terms and conditions
              </a>
            </li>
            <li>
              <a href="/">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="legal-info">
        <div className="legal-info--content lh--1">
          &copy; myplanty, LLC.
        </div>
      </div>
    </footer>
  );
}


export default Footer;
