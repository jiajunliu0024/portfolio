import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import './App.css';

function App() {
  return (
   <main>
      <Navbar/>
      <About/>
      <Projects/>
      <Experience/>
      <Skills/>
      <Contact/>
   </main>
  );
}

export default App;
