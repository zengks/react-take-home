import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import app components
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import theme from "./theme/mui";
import NewDesign from "./pages/NewDesign"

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newdesign" element={<NewDesign />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
  );
}

export default App;
