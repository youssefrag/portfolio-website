import "./App.scss";

import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Hero />
      <Navbar />
      <About />
    </div>
  );
}

export default App;
