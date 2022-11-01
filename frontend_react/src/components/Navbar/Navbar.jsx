import React, { useState } from "react";

import "./Navbar.scss";

import { HiOutlineViewList, HiOutlineX } from "react-icons/hi";

import { images } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "projects", "contact"].map((item) => (
          <li key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        {toggle ? (
          <>
            <HiOutlineX onClick={() => setToggle(false)} />
            <div>
              <ul>
                {["home", "about", "projects", "contact"].map((item) => (
                  <li key={`link-${item}`}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <HiOutlineViewList onClick={() => setToggle(true)} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;