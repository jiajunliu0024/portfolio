// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Jiajun Liu
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-600	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white text-gray-400 bg-gray-800">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white text-gray-400 bg-gray-800">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-whit text-gray-400 bg-gray-800">
            Testimonials
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center   text-gray-400 bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
       <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}