import React from "react";

import "./BarkBnb.scss";

import images from "../../../constants/images";

const BarkBnb = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="barkbnb-container">
      <img src={images.barkbnb} />
      <div className="info-container">
        <h2>BarkBnb</h2>
        <p>
          BarkBnb is a web application built using Python Django, React,
          Material-UI and postgres SQL. The application allows you to post an ad
          when your dog needs a sitter and other users can make offers on your
          ad
        </p>
        <div className="btn-container">
          <button
            onClick={() =>
              openInNewTab("https://github.com/youssefrag/BarkBnb")
            }
          >
            Source Code
          </button>
          <button
            onClick={() => openInNewTab("https://barkbnb-demo.herokuapp.com/")}
          >
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default BarkBnb;
