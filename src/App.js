import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/project_components/Projects";
import BlogHeader from "./components/menu_components/BlogHeader";
import Experience from "./components/experience_components/Experience";
import ComingSoon from "./components/ComingSoon";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <BlogHeader />
              <About />
              <Projects />
              <Experience />
              <Skills />
              <Contact />
            </main>
          }
        />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;
