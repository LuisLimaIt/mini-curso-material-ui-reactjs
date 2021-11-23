import React from "react"
import { Button } from '@material-ui/core'

const Buttons = (props) => (
    <div style={{display: "flex", flexWrap: "wrap", padding: "10px"}}>
        <Button color="secondary">
            Botão
        </Button>
        <Button 
            variant="contained" 
            color="primary"
            disableElevation
        >
            Background  
        </Button>
        <Button 
            variant="outlined" 
            color="primary"
        >
            Apenas Bordas  
        </Button>
        <Button 
            variant="outlined" 
            color="primary"
            href="https://www.google.com"
        >
            Google  
        </Button>
        <Button 
            variant="outlined" 
            color="primary"
            fullWidth
            style={{margin: "10px 0"}}
        >
            FullWidth  
        </Button>
        <Button 
            variant="contained" 
            color="primary"
            size="small"
        >
            FullWidth  
        </Button>
        <Button 
            variant="contained" 
            color="primary"
            size="medium"
        >
            FullWidth  
        </Button>
        <Button 
            variant="contained" 
            color="primary"
            size="large"
        >
            FullWidth  
        </Button>
    </div>
);

export default Buttons;