import { ThemeProvider } from "@material-ui/core";
import React from "react";
import theme from "./themeConfig"
import Button from '@material-ui/core/Button'
import Navbar from "./components/Navbar";
import Typography from '@material-ui/core/Typography'

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
      <Typography variant="h1" color="initial">
      Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis. Per aumento de cachacis, eu reclamis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.
      </Typography>
    </ThemeProvider>
  );
}

export default App;
