import React from "react";

import "./Hero.scss";

import bgVideo from "../assets/video.mp4";

const Hero = () => {
  return (
    <div className="hero">
      <video src={bgVideo} autoPlay loop muted />
      <div className="intro">
        <h1>
          Hello my name is <span>Youssef Ragab</span>
          <br />I am a Full Stack Developer
        </h1>
        <p>To my site</p>
      </div>
    </div>
  );
};

export default Hero;
