import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
   <main>
      <Navbar></Navbar>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
   </main>
  );
}

export default App;
