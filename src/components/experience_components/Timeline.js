import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { experience } from "../../data.js";
import "../style.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useMediaQuery, useTheme } from "@mui/material";

const detail = (description) => {
  return (
    <ul className="text-left list-disc ml-5">
      {description.map((describe, index) => (
        <li key={index} className="text-left">
          {describe}
        </li>
      ))}
    </ul>
  );
};

export default function CustomizedTimeline() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const expTimeLineItem = experience.map((exp) => (
    <TimelineItem
      key={exp.name}
      sx={{
        display: "flex",
        alignSelf: "left",
        flexDirection: { xs: "column", sm: "row" }, // Stack items vertically on small screens
        width: { lg: "100%" }, // Make the timeline item take full width on large screens
      }}
    >
      <TimelineOppositeContent
        className="text-black"
        sx={{
          m: { xs: 0, sm: "auto 0" }, // Remove margin on small screens
          textAlign: { xs: "center", md: "right" }, // Align text to the left on small screens
          flex: 0.15, // Allow opposite content to take up 20% of the width
        }}
      >
        {exp.period}
      </TimelineOppositeContent>
      <TimelineSeparator
        sx={{
          alignSelf: { xs: "center", sm: "stretch" }, // Center dot on small screens
        }}
      >
        <TimelineDot />
        <TimelineConnector
          sx={{
            height: { xs: 20, sm: 60 }, // Shorter connector height for small screens
          }}
        />
      </TimelineSeparator>
      <TimelineContent
        sx={{
          flex: 0.8, // Allow the content to take up 80% of the width
        }}
      >
        <Accordion>
          <AccordionSummary
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              flexDirection: "row", // Normal icon position
              textAlign: "left",
            }}
          >
            {exp.name} {exp.major}
          </AccordionSummary>
          <AccordionDetails>
            <div>{detail(exp.description)}</div>
          </AccordionDetails>
        </Accordion>
      </TimelineContent>
    </TimelineItem>
  ));

  return (
    <div class="relative h-auto w-full overflow-hidden">
      <div
        section="experience"
        className="  sm:w-full md:w-4/5 lg:w-3/4 mx-auto border shadow-lg rounded-lg"
        style={{
          display: "flex",
          justifyContent: "flex-start", // Align to the left
          alignItems: "flex-start", // Align items to the top
        }}
      >
        <Timeline
          position="left"
          sx={{
            "&.MuiTimeline-root": {
              padding: "0", // Remove padding on large screens
            },
            ml: { lg: "0" }, // Remove the default margin-left on large screens
            mt: 5,
            mb: 5,
          }}
        >
          {expTimeLineItem}
        </Timeline>
      </div>
    </div>
  );
}
