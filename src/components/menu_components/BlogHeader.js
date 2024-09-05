// src/components/Navbar.js
import React from "react";
import MenuButton from "./MenuButton";
import Marquee from "react-fast-marquee";

export default function BlogHeader() {
  return (
    <header id="head" className="bg-white">
      <div className="container mx-auto flex justify-between items-center p-5 md:px-30 lg:px-60">
        <a className="font-bold text-lg text-black">
          <a href="#about">Wilson Liu</a>
        </a>
        <div className="w-1/2 hover:w-2/3 flex h-16 items-center">
          <Marquee className="bg-gray-100 h-8 hover:h-12 rounded-full ">
            Avaliable for new positiions
          </Marquee>
        </div>

        <div className="flex items-center space-x-4">
          <MenuButton />
        </div>
      </div>
    </header>
  );
}
