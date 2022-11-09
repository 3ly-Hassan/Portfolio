import React, { useEffect } from "react";
import "./Experience.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience-container">
        <div className="experience-frontend" data-aos="fade-right">
          <h3>Frameworks and Technologies</h3>
          <div className="experience-content">
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>Dart</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>Fluter</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                {" "}
                <h4>BootStrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                {" "}
                <h4>React.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                {" "}
                <h4>Node.js</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend" data-aos="fade-left">
          <h3>Skills</h3>
          <div className="experience-content">
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>OOP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>RestAPIs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>Git & Github</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>Agora</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                {" "}
                <h4>Google Maps</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>Notifications</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
