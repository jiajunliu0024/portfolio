import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import ExperienceCard from "./ExperienceCard.js";
import { educations, jobs } from "../data";

export default function CustomizedTimeline() {
  const educationTimelineItem = educations.map((education) => (
    <TimelineItem>
      <TimelineOppositeContent
        className="text-white"
        sx={{ m: "auto 0" }}
        align="right"
        variant="h6"
      >
        {education.period}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot></TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <ExperienceCard education={education}></ExperienceCard>
      </TimelineContent>
    </TimelineItem>
  ));
  const jobTimeLineItem = jobs.map((job) => (
    <TimelineItem>
      <TimelineOppositeContent
        className="text-white"
        sx={{ m: "auto 0" }}
        align="right"
        variant="h6"
      >
        {job.period}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot></TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <ExperienceCard education={job}></ExperienceCard>
      </TimelineContent>
    </TimelineItem>
  ));

  return (
    <Timeline>
      {educationTimelineItem} ,{jobTimeLineItem}
    </Timeline>
  );
}
