import React, { useEffect } from "react";
import "./about.css";
import Aos from "aos";
import "aos/dist/aos.css";
import MeAbout from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={MeAbout} alt="Me-About" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card" data-aos="fade-up">
              <FaAward className="about-icon"></FaAward>
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
            <article className="about-card" data-aos="fade-up">
              <FiUsers className="about-icon"></FiUsers>
              <h5>Clients</h5>
              <small>50+ Worldwie</small>
            </article>
            <article className="about-card" data-aos="fade-up">
              <VscFolderLibrary className="about-icon"></VscFolderLibrary>
              <h5>Projects</h5>
              <small>70+ Completed</small>
            </article>
          </div>
          <p>
            Enthusiastic computer engineering graduate with good knowledge in
            coding and design. Proficient in HTML, CSS, JavaScript, Bootstrap,
            React.js, Dart, Flutter, Java, Python and DB(SQL - NoSQL). Ability
            to learn new software and technologies quickly. Capability to work
            in teams by providing valuable support.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
