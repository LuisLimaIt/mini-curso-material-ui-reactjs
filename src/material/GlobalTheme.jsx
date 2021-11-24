import React from "react"
import { Button } from '@material-ui/core'

// import { ThemeProvider } from "@material-ui/core";
// import theme from "../themeConfig";

const GlobalTheme = (props) => {

    return (

        // O Theme provider deve envolver toda a aplicação, então deve ser inserido em App.jsx
        //Esse arquivo é apenas para referência e exemplificação
        // <ThemeProvider theme={theme}>
            <div style={{padding: "1rem"}}>
                <Button variant="contained" color="primary">
                        Botão
                </Button>
                <Button variant="contained" color="secondary">
                        Botão
                </Button>
            </div>
        // </ThemeProvider>
    )
};

export default GlobalTheme;