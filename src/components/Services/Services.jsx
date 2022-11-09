import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>Mobile Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck></BiCheck>
              <p>
                Building and shipping robust apps to Android/ iOS devices using
                a single codebase.
              </p>
            </li>
            <li>
              <BiCheck></BiCheck>
              <p>
                Writing readable and clear code using Dart that will be
                extensively documented for future use and upgrades.
              </p>
            </li>
            <li>
              <BiCheck></BiCheck>
              <p>
                Transform the business requirements into feature specifications;
              </p>
            </li>
            <li>
              <BiCheck></BiCheck>
              <p>
                Design and develop high-volume, low-latency applications and
                deliver high availability and performance.
              </p>
            </li>
            <li>
              <BiCheck></BiCheck>
              <p>Ensure designs are in compliance with specifications</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service-head">
            <h3>Web Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck></BiCheck>
              <p>Determining the structure and design of web pages.</p>
            </li>
            <li>
              <BiCheck></BiCheck>
              <p>Ensuring user experience determines design choices.</p>
            </li>
            <li>
              <BiCheck></BiCheck>
              <p>Ensuring web design is optimized for smartphones.</p>
            </li>
            <li>
              <BiCheck></BiCheck>
              <p>Optimizing web pages for maximum speed and scalability.</p>
            </li>
            <li>
              <BiCheck></BiCheck>
              <p>Utilizing a variety of markup languages to write web pages.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
