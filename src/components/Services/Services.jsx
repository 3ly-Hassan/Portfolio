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
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck></BiCheck>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck></BiCheck>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck></BiCheck>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck></BiCheck>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
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
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck></BiCheck>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck></BiCheck>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck></BiCheck>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck></BiCheck>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
