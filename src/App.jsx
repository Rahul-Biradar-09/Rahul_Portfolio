import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <ScrollToTop /> 
    </div>
  );
};

export default App;
