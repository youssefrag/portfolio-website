import React from "react";

import "./Home.scss";

import { images } from "../../constants";

const Home = () => {
  return (
    <div id="home" className="home container grid grid--5-cols grid--center-v">
      <div className="info-container">
        <h1 className="name heading-primary">Youssef Ragab</h1>
        <h2 className="heading-secondary sub-heading">Full Stack Developer</h2>
      </div>
      <div className="img-container">
        <img src={images.youssef} />
      </div>
    </div>
  );
};

export default Home;
