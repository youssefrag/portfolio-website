import React from "react";

import "./Skills.scss";

import skills from "../../data/skills";

import { images } from "../../constants";

const Skills = () => {
  const renderSkills = skills.map((skill) => {
    const imgLink = images[skill];

    return (
      <div className="skill-element">
        <img src={imgLink} />
        {skill.toUpperCase()}
      </div>
    );
  });

  return <div className="skills-container">{renderSkills}</div>;
};

export default Skills;
