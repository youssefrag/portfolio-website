import "./App.scss";

import { Navbar, Home, About } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
