import React from "react";

import "./Projects.scss";

import BarkBnb from "./BarkBnb/BarkBnb";
import BoxShop from "./BoxShop/BoxShop";

const Projects = () => {
  return (
    <div id="projects" className="section-projects container">
      <h2 className="sub-heading projects-heading">My projects</h2>
      <BarkBnb />
      <BoxShop />
    </div>
  );
};

export default Projects;
