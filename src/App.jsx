import { ThemeProvider } from "@material-ui/core";
import React from "react";
import theme from "./themeConfig"
import Button from '@material-ui/core/Button'
import Navbar from "./components/Navbar";
import Typography from '@material-ui/core/Typography'
import Listas from "./components/Listas";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Button variant="contained" color="primary">
        Botão
      </Button>
      <Button variant="contained" color="secondary">
        Botão
      </Button>
      
      <Listas />
    </ThemeProvider>
  );
}

export default App;
