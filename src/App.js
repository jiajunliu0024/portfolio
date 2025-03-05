import React, { Suspense, lazy } from "react";
import About from "./components/About";
import Contact from "./components/info_components/Contact";
import Skills from "./components/Skills";
import BlogHeader from "./components/menu_components/BlogHeader";
import Testimonials from "./components/Testimonials";
import ComingSoon from "./components/ComingSoon";
import Copyright from "./components/info_components/Copyright";
import BlogEventSchedule from "./components/BlogEventSchedule";
import ContactBar from "./components/info_components/ContactBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

const Projects = lazy(() => import("./components/project_components/Projects"));
const Experience = lazy(() =>
  import("./components/experience_components/Experience")
);

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
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
                <BlogEventSchedule />
                <ContactBar />
                <Copyright />
              </main>
            }
          />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
