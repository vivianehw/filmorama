import { createTheme } from "@mui/material";
import palette from "./palette";
import appTypography from "./appTypography";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 672,
      lg: 1056,
      xl: 1312,
    },
  },
  palette: palette,
  typography: {
    appTypography,
    fontFamily: 'Times New Roman',
    fontSize: 16,
  }
});

export default theme;
