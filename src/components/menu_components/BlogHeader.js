// src/components/Navbar.js
import React from "react";
import MenuButton from "./MenuButton";
import Marquee from "react-fast-marquee";

export default function BlogHeader({ hidden }) {
  return (
    <header id="head" className="bg-white">
      <div className="container mx-auto flex justify-between items-center p-5 md:px-30 lg:px-40">
        <a className="font-bold text-lg text-black">
          <a href="/#about">Jiajun Liu</a>
        </a>
        <div className="w-1/2 flex h-16 items-center">
          <Marquee className="bg-gray-100 h-10 items-center rounded-full hover:bg-gray-200 hover:h-14 transition-all duration-300 ease-in-out">
            <div className="flex items-center">
              <div class="h-3 w-3 bg-green-400 rounded-full"></div>
              <div class="h-3 w-3 bg-green-400 rounded-full absolute animate-ping"></div>
              <span className="ml-2">Available for new positions</span>
            </div>
          </Marquee>
        </div>

        <div hidden={hidden} className="flex items-center space-x-4">
          <MenuButton />
        </div>
      </div>
    </header>
  );
}
