import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/project_components/Projects";
import BlogHeader from "./components/menu_components/BlogHeader";
import Experience from "./components/experience_components/Experience";
import "./App.css";

function App() {
  return (
    <main>
      <BlogHeader />
      <About />
      <Projects />
      <Experience />
      <Skills />
      {/* <Contact /> */}
    </main>
  );
}

export default App;
