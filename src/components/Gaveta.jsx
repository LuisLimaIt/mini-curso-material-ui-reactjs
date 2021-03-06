import React from 'react';
import {
    makeStyles,
    Drawer,
    Divider
} from '@material-ui/core';
import Listas from './Listas'

const estilos = makeStyles(theme => ({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    toolbar: theme.mixins.toolbar
}))

const Gaveta = ({ variant, open, onClose }) => {

    const classes = estilos();

    return (
        <Drawer
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor='left'
            variant={variant}
            open={open}
            onClose={onClose? onClose : null}
        >
            <div className={classes.toolbar}></div>
            <Divider />
            <Listas />
        </Drawer>
    );
}

export default Gaveta;
