import React from 'react';
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    }
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar>
              <Toolbar>
                    <IconButton 
                        color="inherit" 
                        aria-label='menu'
                        className={classes.menuButton} 
                    >
                        <MenuIcon />
                    </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Luis
                </Typography>
                <Button variant="text" color="inherit">
                  Login
                </Button>
              </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default Navbar;