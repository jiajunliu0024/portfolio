import React from "react";

const BlogEventSchedule = () => {
  return (
    <div className="flex flex-col w-full h-auto items-center">
      <div className="flex flex-col mb-20 w-3/4 h-[400px] rounded-lg items-center bg-gray-50">
        <div className="flex flex-col items-center mt-20">
          <p className="text-5xl font-weight:800 mt-10">
            Let's Talk about Your Project.
          </p>
          <p className="text-xl opacity-50 mt-5">
            Somethings you wanna share with me, let's have a chat
          </p>
        </div>
        <div className="w-full space-x-4 mt-5 flex md:justify-center sm:justify-center">
          <button className="inline-flex text-white bg-gray-900 border-0 py-2 px-2 focus:outline-none hover:bg-white hover:text-black hover:scale-110 rounded-lg text-base">
            Schedule a Meeting
          </button>
          <a
            href="#projects"
            className="ml-2 inline-flex text-black bg-gray-100 border-0 py-2 px-2 focus:outline-none hover:bg-gray-100 hover:text-white rounded-lg text-base"
          >
            Send me a message
          </a>
        </div>
        {/* <p>
          &copy; {new Date().getFullYear()} Your Blog Name. All rights reserved.
        </p> */}
      </div>
    </div>
  );
};

export default BlogEventSchedule;
