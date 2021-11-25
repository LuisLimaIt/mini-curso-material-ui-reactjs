import React from "react";

import { ThemeProvider } from "@material-ui/core";
import theme from "./themeConfig"
import DrawerEstatico from "./components/DrawerEstatico";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DrawerEstatico />
    </ThemeProvider>
  );
}

export default App;
