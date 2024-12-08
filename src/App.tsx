import React from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./styles/theme";
import Header from "./components/header";
import Main from "./components/main";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minWidth: "100vw", minHeight: "100vh" }}>
        <Header />
        <Main />
      </Box>
    </ThemeProvider>
  );
};

export default App;
