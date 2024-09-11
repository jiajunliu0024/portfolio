// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../../data";

export default function Projects() {
  return (
    <section id="projects" className="text-white bg-white body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto text-black inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg hover:scale-105 hover:bg-gray-300 transition duration-700 ease-in-out sm:w-full md:w-full lg:w-full h-74 p-4"
            >
              <a className="h-full" href={project.link}>
                <div className="relative flex flex-col h-full">
                  <img
                    alt="gallery"
                    className="shadow-lg w-full h-4/5 object-cover object-center"
                    src={project.image}
                  />
                  <div className="relative z-10 flex flex-col justify-between h-full px-1">
                    <h1 className="mt-1 justify-start text-xl font-bold text-black">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed text-gray-700">
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
