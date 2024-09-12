import React from "react";
import About from "./components/About";
import Contact from "./components/info_components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/project_components/Projects";
import BlogHeader from "./components/menu_components/BlogHeader";
import Experience from "./components/experience_components/Experience";
import Testimonials from "./components/Testimonials";
import ComingSoon from "./components/ComingSoon";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
              <Testimonials />
              <Skills />
            </main>
          }
        />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
