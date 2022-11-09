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
          <h3>Oranos Experts</h3>
          <div className="cta">
            <a
              href="https://github.com/3ly-Hassan/Oranos"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://drive.google.com/file/d/1M6hIxRtfW90hPgvIBHDt-_yCpBQhCc-p/view?usp=sharing"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={img1} alt="project-1" />
          </div>
          <h3>Electronics Shop</h3>
          <div className="cta">
            <a
              href="https://github.com/3ly-Hassan/Electronics_Shop_MagdSoft"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://drive.google.com/file/d/1M-jU2VFRhBgue1COoWBPLjUZC_PI5Mzn/view?usp=sharing"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={img3} alt="project-1" />
          </div>
          <h3>Kayan Medical</h3>
          <div className="cta">
            <a
              href="https://github.com/3ly-Hassan/Kayan-Medical"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://drive.google.com/file/d/1M4HAf9J4zaXO7PLeskgpZSY1wLz4RYfH/view?usp=sharing"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={img4} alt="project-1" />
          </div>
          <h3>هنعرفّك</h3>
          <div className="cta">
            {/* <a href="" className="btn" target="_blank">
              Github
            </a> */}
            <a
              href="https://drive.google.com/file/d/1LvnVGTiyNvN-WYfz_irT-s_TUSsAoxcn/view?usp=sharing"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={img5} alt="project-1" />
          </div>
          <h3>ToDo App </h3>
          <div className="cta">
            <a
              href="https://github.com/3ly-Hassan/ProMinaTask"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://drive.google.com/file/d/1l3a8uLwQGuA3NlRKVviOtxsikfLhVIZa/view?usp=sharing"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
