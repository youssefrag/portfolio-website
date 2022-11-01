import React from "react";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="section-nav">
      <ul className="app__navbar-links">
        {["home", "about", "projects", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
