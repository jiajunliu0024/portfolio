// src/components/About.js

import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <section id="about">
      <div className="container px-10 py-40 md:px-40 lg:px-60 mx-auto bg-white-900 flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hi, I'm Jiajun.
          </h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "I am a back-end developer",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "I am a team player",
              1000,
              "I am a code lover",
              1000,
              "I'like to help people to build their dream",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "32px", display: "inline-block" }}
            repeat={Infinity}
          />
          <p className="mb-8 text-gray-400 leading-relaxed">
            Hello, I am Jiajun Liu. A fullstack developer in Melbourne. Nice to
            meet you.
          </p>

          <div className="flex place-content-between ">
            <a
              href="#contact"
              className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-xl lg:w-full md:w-3/4 w-full">
          <div className="bg-gray-100 p-4 rounded-lg">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/porfolio/profile_image.jpeg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
