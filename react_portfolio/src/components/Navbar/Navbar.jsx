import React from "react";

import "./Navbar.scss";

const Navbar = () => {
  const sectionNav = document.querySelector(".section-nav");

  console.log(sectionNav);

  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      console.log(ent);
      if (ent.isIntersecting === false) {
        document.body.classList.add("sticky");
      }

      if (ent.isIntersecting === true) {
        document.body.classList.remove("sticky");
      }
    },
    {
      // In the viewport
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    }
  );
  obs.observe(sectionNav);
  return <nav className="section-nav">Navbar</nav>;
};

export default Navbar;
