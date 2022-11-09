import React from "react";
import Cta from "./Cta";
import ME from "../../assets/me.png";
import "./header.css";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header id="header">
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Ali Hassan Ali</h1>
        <h5 className="text-light">Flutter & React.js Developer</h5>
        <Cta></Cta>
        <HeaderSocial></HeaderSocial>

        <div className="me">
          <img src={ME} alt="ME" />
        </div>
        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
