import React from "react";

import "./About.scss";

import youssef from "../../assets/Youssef-004.jpg";

import Skills from "../Skills/Skills";

const About = (props) => {
  const { about } = props;
  return (
    <div id="about" ref={about} className="section-about">
      <div className="about-info container">
        <h2 className="sub-heading">About Me!</h2>
        <div className="descrip-skills">
          <div className="descrip">
            <div className="img-container">
              <img src={youssef} alt="youssef" />
            </div>
            <div className="p-container">
              <p>
                Recent coding bootcamp grad, full stack developer with a deep
                passion for all things web development. The unique combination
                of creativity, logic, technology and never running out of new
                things to discover, drives my excitement and passion for web
                development. When I’m not at my computer I like to spend my time
                reading and doing sports.
              </p>
            </div>
          </div>
          <div className="skills">
            <h2 className="sub-heading">Skills</h2>
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
