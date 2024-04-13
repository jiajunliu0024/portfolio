import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function ExperienceCard({ education }) {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex" }}>
      <Box className="w-80" sx={{ display: "flex", flexDirection: "column" }}>
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
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <img
            alt="hero"
            src={education.image}
            className="scroll-ml-5 w-120 h-20"
          />
        </CardContent>
      </Box>
    </Card>
  );
}