import React from "react";

import "./Hero.scss";

import bgVideo from "../../assets/video.mp4";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <video src={bgVideo} autoPlay loop muted />
      <div className="intro">
        <h1>
          Hello, I'm <span>Youssef Ragab</span>
          <br />I am a Full Stack Developer
        </h1>
        <button>View my work &#x2193;</button>
      </div>
    </div>
  );
};

export default Hero;
