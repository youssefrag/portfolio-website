import React from "react";

import "./Navbar.scss";

const Navbar = (props) => {
  const { page, setPage, navClass } = props;

  if (navClass === "fixed") {
    return (
      <nav className="section-nav">
        <ul className="app__navbar-links">
          {["home", "about", "projects", "contact"].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              {page === item ? (
                <a
                  onClick={() => setPage(item)}
                  href={`#${item}`}
                  style={{ color: "#f03e3e" }}
                >
                  {item}
                </a>
              ) : (
                <a onClick={() => setPage(item)} href={`#${item}`}>
                  {item}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  } else if (navClass === "sticky") {
    return (
      <nav className="section-nav-sticky">
        <ul className="app__navbar-links">
          {["home", "about", "projects", "contact"].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              {page === item ? (
                <a
                  onClick={() => setPage(item)}
                  href={`#${item}`}
                  style={{ color: "#f03e3e" }}
                >
                  {item}
                </a>
              ) : (
                <a onClick={() => setPage(item)} href={`#${item}`}>
                  {item}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  }
};

export default Navbar;
