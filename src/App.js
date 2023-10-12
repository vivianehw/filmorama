import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Global } from "@emotion/react";
import GlobalStyles from "./theme/globalStyles";
import theme from './theme'
import AppRoutes from './routes';

const App = () => (
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyles} />
    <CssBaseline />
    <AppRoutes />
  </ThemeProvider>
);

export default App;
