import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { experience } from "../../data.js";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useMediaQuery, useTheme } from "@mui/material";

export default function CustomizedTimeline() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const expTimeLineItem = experience.map((exp) => (
    <TimelineItem
      key={exp.name}
      sx={{
        display: "flex",
        alignSelf: "center",
        flexDirection: { xs: "column", sm: "row" }, // Stack items vertically on small screens
      }}
    >
      {!isMobile && (
        <TimelineOppositeContent
          className="text-black"
          sx={{
            m: { xs: 0, sm: "auto 0" }, // Remove margin on small screens
            textAlign: { xs: "left", md: "right" }, // Align text to the left on small screens
          }}
        >
          {exp.period}
        </TimelineOppositeContent>
      )}
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
      <TimelineContent>
        <Accordion>
          <AccordionSummary
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              flexDirection: { xs: "row-reverse", sm: "row" }, // Reverse icon position on mobile
              textAlign: { xs: "left", sm: "inherit" },
            }}
          >
            {exp.name} {exp.major}
          </AccordionSummary>
          <AccordionDetails>
            <p className="leading-relaxed">{exp.description}</p>
          </AccordionDetails>
        </Accordion>
      </TimelineContent>
    </TimelineItem>
  ));

  return (
    <div className="sm:w-full md:w-4/5 lg:w-3/4 mx-auto">
      <Timeline position={isMobile ? "right" : "alternate"}>
        {expTimeLineItem}
      </Timeline>
    </div>
  );
}
