import * as React from "react";

import { CodeIcon } from "@heroicons/react/solid";
import CustomizedTimeline from "./Timeline.js";

export default function Experience() {
  return (
    <div id="experience" className=" text-gray-400  body-font">
      <div className=" text-center">
        <CodeIcon className="mx-auto text-black inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
          Experience
        </h1>
      </div>

      <div>
        <CustomizedTimeline></CustomizedTimeline>
      </div>
    </div>
  );
}
