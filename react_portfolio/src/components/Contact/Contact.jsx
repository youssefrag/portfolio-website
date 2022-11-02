import React from "react";

import "./Contact.scss";

import { BsEnvelopeFill } from "react-icons/bs";

import { AiFillGithub, AiFillPhone } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact" className="section-contact container">
      <h3>Have a question or want to work together? Contact Me</h3>
      <div className="contact-container">
        <div className="icon-container">
          <BsEnvelopeFill />
        </div>
        <h4>ragab.youssef95@gmail.com</h4>
      </div>
      <div className="contact-container">
        <div className="icon-container">
          <AiFillPhone />
        </div>
        <h4>+1 613 400 8096</h4>
      </div>
      <div className="contact-container">
        <div className="icon-container">
          <AiFillGithub />
        </div>
        <h4>https://github.com/youssefrag</h4>
      </div>
    </div>
  );
};

export default Contact;
