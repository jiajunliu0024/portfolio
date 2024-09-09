// src/components/About.js

import React from "react";
import { TypeAnimation } from "react-type-animation";
import profileImg from "./images/profile-image.jpeg";
export default function About() {
  return (
    <section id="about">
      <div className="container py-20 sm:px-10 md:px-10 lg:px-40 mx-auto bg-white-900 flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-2/3 lg:pr-16 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hi, I'm Jiajun.
          </h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "I am a back-end developer",
              1000, // wait 1 second before replacing
              "I am a team player",
              1000,
              "I am passionate about coding",
              1000,
              "I love helping people bring their dreams to life",
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

          <div className="w-full flex lg:justify-start md:justify-center sm:justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-2 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:w-4/5 md:w-4/5 w-full">
          <div className="bg-gray-100 p-4 rounded-lg">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={profileImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
