import { useState, useEffect, useRef } from "react";

import "./App.scss";

import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  const [page, setPage] = useState("home");

  const [navClass, setNavClass] = useState("fixed");

  const about = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const goToAbout = () => {
    setPage("about");
    scrollToSection(about);
  };

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
      <Hero page={page} setPage={setPage} goToAbout={goToAbout} />
      <Navbar page={page} setPage={setPage} navClass={navClass} />
      <About about={about} />
      <Projects />
    </div>
  );
}

export default App;
