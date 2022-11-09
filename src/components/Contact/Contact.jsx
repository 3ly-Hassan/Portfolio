import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p48tdpi",
        "template_u1hfmd7",
        form.current,
        "1c15_1Gjn-vXhqD64"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          e.target.reset();
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="option">
            <HiOutlineMail></HiOutlineMail>
            <h4>Email</h4>
            <h5 className="text-light">AliHassan191999@gmail.com</h5>
            <a href="mailto:AliHassan191999@gmail.com">Send me a message</a>
          </article>
          <article className="option">
            <BsMessenger></BsMessenger>
            <h4>Messanger</h4>
            <h5 className="text-light">Ali Hassan Ali</h5>
            <a href="https://m.me/3lyHassanAli">Send me a message</a>
          </article>
          <article className="option">
            <BsWhatsapp></BsWhatsapp>
            <h4>WhatsApp</h4>
            <h5 className="text-light">01097606919</h5>
            <a href="https://wa.me/201097606919">Send me a whatsApp message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="text"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
