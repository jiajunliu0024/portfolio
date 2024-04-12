import * as React from "react";

import { CodeIcon } from "@heroicons/react/solid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CustomizedTimeline from "./Timeline.js";

export default function Experience() {
  return (
    <div id="experience" className=" text-gray-400 bg-gray-900 body-font">
      <div className=" text-center">
        <CodeIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          Experience
        </h1>
      </div>

      <div>
        <CustomizedTimeline></CustomizedTimeline>
      </div>
    </div>
  );
}
