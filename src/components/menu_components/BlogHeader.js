// src/components/Navbar.js
import React from "react";
import MenuButton from "./MenuButton";

export default function BlogHeader() {
  return (
    <header id="head" className="bg-white">
      <div className="container mx-auto flex justify-between items-center p-5 md:px-30 lg:px-60">
        <a className="font-bold text-lg text-black">
          <a href="#about">Wilson Liu</a>
        </a>
        <div className="flex items-center space-x-4">
          <MenuButton />
        </div>
      </div>
    </header>
  );
}
