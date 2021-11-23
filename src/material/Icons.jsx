import React from "react"
import { Delete as DeleteIcon } from "@material-ui/icons";
import { Icon, IconButton } from "@material-ui/core";
import Button from '@material-ui/core/Button'

const Icons = (props) => (
    <>
    {/* Alternativa com ícone SVG*/}
        <DeleteIcon 
            color="primary"
        />

        {/* Alternativa com ícone span*/}
        <Icon>
            start
        </Icon>

        <Button 
            variant="contained" 
            color="secondary"
            startIcon={<DeleteIcon />}
        >
          Delete
        </Button>

        <Button 
            variant="contained" 
            color="primary"
            endIcon={<Icon>room</Icon>}
        >
          Room
        </Button>

        <IconButton 
            aria-label="delete" 
        >
            <DeleteIcon 
                color="primary"
            />
        </IconButton>
    </>
);

export default Icons;