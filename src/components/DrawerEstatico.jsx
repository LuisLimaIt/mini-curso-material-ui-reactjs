import React, { useState } from 'react';
import Navbar from './Navbar';
import {
    Hidden,
    makeStyles
} from '@material-ui/core'
import Gaveta from './Gaveta';

const estilos = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    }
}))

const DrawerEstatico = () => {

    const classes = estilos();
    const [abrir, setAbrir] = useState(false);

    const openMenu = () => {
        setAbrir(!abrir)
    }

    return (
        <div className={classes.root}>
            <Navbar openMenu={openMenu} />
            <Hidden xsDown>
                <Gaveta 
                    variant="permanent"
                    open={true}
                />
            </Hidden>
            <Hidden smUp>
                <Gaveta 
                    variant="temporary"
                    open={abrir} 
                    onClose={openMenu} 
                />
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                Conteúdo
            </div>
        </div>
    );
}

export default DrawerEstatico;

