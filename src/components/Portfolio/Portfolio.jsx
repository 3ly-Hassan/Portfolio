import React from "react";
import "./portfolio.css";
import img1 from "../../assets/portfolio-1.jpg";
import img2 from "../../assets/portfolio-2.jpg";
import img3 from "../../assets/portfolio-3.jpg";
import img4 from "../../assets/portfolio-4.jpg";
import img5 from "../../assets/portfolio-5.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={img2} alt="project-1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="cta">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={img1} alt="project-1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="cta">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={img3} alt="project-1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="cta">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={img4} alt="project-1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="cta">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={img5} alt="project-1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="cta">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
