import React from "react";

import "./BoxShop.scss";

import images from "../../../constants/images";

const BoxShop = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="boxshop-container">
      <div className="info-container">
        <h2>BoxShop</h2>
        <p>
          BoxShop is an e-commerce website that sells boxing equipment. The web
          application has been created with Python/Django for the backend and
          ReactJs/MUI for the frontend.The data managment of the application is
          done through a Postgresql database hosted on AWS
        </p>
        <div className="btn-container">
          <button
            onClick={() =>
              openInNewTab("https://github.com/youssefrag/BoxShop")
            }
          >
            Source Code
          </button>
          <button
            onClick={() => openInNewTab("https://boxshop-demo.herokuapp.com/")}
          >
            Live Demo
          </button>
        </div>
      </div>
      <img src={images.boxshop} />
    </div>
  );
};

export default BoxShop;
