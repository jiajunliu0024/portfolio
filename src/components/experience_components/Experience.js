import * as React from "react";

import { CalendarIcon } from "@heroicons/react/solid";
import CustomizedTimeline from "./Timeline.js";

export default function Experience() {
  return (
    <div
      id="experience"
      className="h-auto w-full bg-grey-200 text-gray-400  body-font"
    >
      <div className="py-5 text-center">
        <CalendarIcon className="pmx-auto text-black inline-block w-10 mb-4" />
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
