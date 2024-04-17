import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ExperienceDetail from "./ExperienceDetail.js";
import { Image } from "antd";

export default function ExperienceCard({ education }) {
  return (
    <Card sx={{ display: "flex" }}>
      <Box
        height={200}
        width={300}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {education.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {education.major}
          </Typography>
        </CardContent>
      </Box>
      <Box className="w-80" sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography>
            <ExperienceDetail
              details={education.detail.subjects}
            ></ExperienceDetail>
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <img alt="hero" src={education.image} className="mr-0 w-120 h-20" />
        </CardContent>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Image width={100} src={education.detail.img.degree} />
          </CardContent>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Image width={100} src={education.detail.img.ahegs} />
          </CardContent>
        </Box>
      </Box>
    </Card>
  );
}
