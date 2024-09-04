import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    lightGrey: "#E9ECEF",
    primary: {
      main: "#FF5733",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    grey: {
      light: "#E9ECEF",
      main: "#CED4DA",
      // dark: will be calculated from palette.secondary.main,
      dark: "#ADB5BD",
    },
  },
});
export default theme;
