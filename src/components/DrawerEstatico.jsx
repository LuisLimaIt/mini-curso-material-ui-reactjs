import React from 'react';
import Navbar from './Navbar';
import {
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

    return (
        <div className={classes.root}>
            <Navbar />
            <Gaveta />
            Conteúdo
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                Conteúdo
            </div>
        </div>
    );
}

export default DrawerEstatico;

