import React from "react";
import Contact from "./sections/Contact";
import MainHero from "./sections/MainHero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <MainHero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
};

export default App;
