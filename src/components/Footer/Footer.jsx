import React from "react";
import "./footer.css";
import {
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">
        3lyHassan
      </a>
      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer-social">
        <a href="https://www.facebook.com/3lyHassanAli/">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/3ly_hassan/">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/alihassan191999/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/3ly-Hassan">
          <BsGithub />
        </a>
        <a href="https://twitter.com/eng_3ly_">
          <BsTwitter />
        </a>
      </div>
      <div className="footer-copy-right">
        <small>&copy; Ali Hassan ALi. All rights reserved. 2022</small>
      </div>
    </footer>
  );
};

export default Footer;
