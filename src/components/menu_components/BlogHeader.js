// src/components/Navbar.js
import React from "react";
import MenuButton from "./MenuButton";

export default function BlogHeader() {
  return (
    <header id="head" className="bg-withe">
      <div className="container mx-auto place-content-between flex p-5 flex-row">
        <a className="title-font font-medium text-black mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Wilson Liu
          </a>
        </a>
        <MenuButton></MenuButton>
      </div>
    </header>
  );
}
