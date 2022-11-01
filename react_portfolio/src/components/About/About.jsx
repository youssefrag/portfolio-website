import React from "react";

import "./About.scss";

import youssef from "../../assets/Youssef-004.jpg";

// import youssef from '../../assets/'

const About = () => {
  return (
    <div id="about" className="section-about">
      {/* <video src={bgVideo} autoPlay loop muted /> */}
      <div className="about-info container">
        <h2 className="sub-heading">About Me!</h2>
        <div className="descrip-skills">
          <div className="descrip">
            <div className="img-container">
              <img src={youssef} alt="youssef" />
            </div>
            <div className="p-container">
              <p>
                About Fully committed to the philosophy of life-long learning,
                I’m a full stack developer with a deep passion for JavaScript,
                React and all things web development. The unique combination of
                creativity, logic, technology and never running out of new
                things to discover, drives my excitement and passion for web
                development. When I’m not at my computer I like to spend my time
                reading, keeping fit and playing guitar.
              </p>
            </div>
          </div>
          <div className="skills">
            <h2 className="sub-heading">Skills</h2>
          </div>
        </div>
        <div className="filler"></div>
      </div>
    </div>
  );
};

export default About;
