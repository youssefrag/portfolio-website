import React, { useState } from "react";

import "./Navbar.scss";

import { HiMenuAlt4, HiX } from "react-icons/hi";

const Navbar = (props) => {
  const { page, setPage, navClass } = props;

  const [toggle, setToggle] = useState(false);

  if (navClass === "fixed") {
    return (
      <>
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
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle && (
            <div>
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {["home", "about", "projects", "contact"].map((item) => (
                  <li
                    className="app__flex p-text"
                    key={`link-${item}`}
                    onClick={() => setToggle(false)}
                  >
                    <a onClick={() => setPage(item)} href={`#${item}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </>
    );
  } else if (navClass === "sticky") {
    return (
      <>
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
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle && (
            <div>
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {["home", "about", "projects", "contact"].map((item) => (
                  <li
                    className="app__flex p-text"
                    key={`link-${item}`}
                    onClick={() => setToggle(false)}
                  >
                    <a onClick={() => setPage(item)} href={`#${item}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </>
    );
  }
};

export default Navbar;
