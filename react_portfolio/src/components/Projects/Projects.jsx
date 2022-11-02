import React from "react";

import "./Projects.scss";

import BarkBnb from "./BarkBnb/BarkBnb";

const Projects = () => {
  return (
    <div id="projects" className="section-projects container">
      <h2 className="sub-heading projects-heading">My projects</h2>
      <BarkBnb />
    </div>
  );
};

export default Projects;
