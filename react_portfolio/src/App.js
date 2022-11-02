import { useState, useEffect, useRef } from "react";

import "./App.scss";

import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

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
    const obsHome = new IntersectionObserver(
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
        rootMargin: "10px",
      }
    );
    obsHome.observe(sectionHome);

    const sectionAbout = document.querySelector("#about");
    const obsAbout = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];
        console.log(ent);

        if (ent.isIntersecting === false) {
          setPage("projects");
        }
        if (ent.isIntersecting === true) {
          setPage("about");
        }
      },
      {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: "-25px",
      }
    );
    obsAbout.observe(sectionAbout);

    const sectionProjects = document.querySelector("#projects");
    const obsProjects = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];
        console.log(ent);

        if (ent.isIntersecting === false) {
          setPage("about");
        }
      },
      {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: "-5px",
      }
    );
    obsProjects.observe(sectionProjects);
  }, []);

  return (
    <div className="App">
      <Hero page={page} setPage={setPage} goToAbout={goToAbout} />
      <Navbar page={page} setPage={setPage} navClass={navClass} />
      <About about={about} />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
