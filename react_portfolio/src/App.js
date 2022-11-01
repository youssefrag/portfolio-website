import { useState, useEffect } from "react";

import "./App.scss";

import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";

function App() {
  const [page, setPage] = useState("home");

  const [navClass, setNavClass] = useState("fixed");

  useEffect(() => {
    const sectionHome = document.querySelector("#home");
    const obs = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];
        console.log(ent);

        if (ent.isIntersecting === false) {
          setNavClass("sticky");
          setPage("about");
        }
        if (ent.isIntersecting === true) {
          setNavClass("fixed");
          setPage("home");
        }
      },
      {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: "-5px",
      }
    );
    obs.observe(sectionHome);
  }, []);

  return (
    <div className="App">
      <Hero />
      <Navbar page={page} setPage={setPage} navClass={navClass} />
      <About />
    </div>
  );
}

export default App;
