import React from "react";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
const HeaderSocial = () => {
  return (
    <div className="header-social">
      <a
        href="https://www.linkedin.com/in/alihassan191999/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin></BsLinkedin>
      </a>
      <a href="https://github.com/3ly-Hassan" target="_blank" rel="noreferrer">
        <BsGithub></BsGithub>
      </a>
      <a
        href="https://www.linkedin.com/in/alihassan191999/"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook></BsFacebook>
      </a>
    </div>
  );
};

export default HeaderSocial;
